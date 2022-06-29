import { useState } from "react";
import Header from "../../components/Header/Header";
import { useFetch } from "../../hooks/useFetch";

const GetPlanetId = () => {
  const url = "http://localhost:3000/planets";
  const { data: planets } = useFetch(url);

  const [planetId, setPlanetId] = useState(1);

  useFetch(() => {
    planets.map((planet) => planet.id === planetId);
  }, [planetId]);

  return (
    <>
      <Header setPlanetId={setPlanetId} />
    </>
  );
};
export default GetPlanetId;
