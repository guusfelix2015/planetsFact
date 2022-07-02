import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Planet.module.css";

const Planet = () => {
  const { name } = useParams();
  const url = "http://localhost:3000/planets?name=" + name;
  const { data } = useFetch(url);
  const [planets, setPlanets] = useState();

  useEffect(() => {
    if (data && data.length > 0) setPlanets(data[0]);
  }, [data]);

  return (
    <>
      {planets && (
        <div className={styles.container}>
          <div className={styles.planetContainer}>
            <div className={styles.planetImg}>
              <img src={planets.images.planet} alt="" />
            </div>
            <div className={styles.planetContent}>
              <h1>{planets.name}</h1>
              <p>{planets.overview.content}</p>
              <div className={styles.spanFlex}>
                <span>Source:</span>
                <a target="_blank" href={planets.overview.source}>
                  Wikepedia
                </a>
                <img src="../assets/icon-source.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Planet;
