import { useState, useEffect } from "react";

// Custon Hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

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
    }
  };

  useEffect(() => {
    const fetchData = async () => {
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

  return { data, httpConfig, loading, error };
};
