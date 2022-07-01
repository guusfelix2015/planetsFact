import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Planet = () => {
  const { name } = useParams();
  const url = "http://localhost:3000/planets?name=" + name;
  const { data } = useFetch(url);
  const [planets, setPlanets] = useState();

  useEffect(() => {
    if (data && data.length > 0) setPlanets(data[0]);
    console.log(data[0]);
  }, [data]);

  return (
    <>
      {planets && (
        <div>
          <h1>{planets.name}</h1>
        </div>
      )}
    </>
  );
};

export default Planet;
