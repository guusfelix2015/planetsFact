import { useState, useEffect } from "react";

// Custon Hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // Refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // Loading
  const [loading, setLoading] = useState(false);

  // Tratando erros
  const [error, setError] = useState(null);

  // DESAFIO DELETAR ITEM
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Loading
      setLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(`hi error ${error}`);
        setError("Houve algum erro ao carregar os dados");
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // Refatorando Post
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let fetchOptions = [url, config];
        const response = await fetch(...fetchOptions);
        json = await response.json();
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const response = await fetch(deleteUrl, config);
        json = await response.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, loading, error };
};
