import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import styles from "./Planet.module.css";

const Planet = () => {
  const { name } = useParams();
  const url = "https://projectsfacts.herokuapp.com/planets?name=" + name;
  const { data } = useFetch(url);
  const [planets, setPlanets] = useState();
  const [text, setText] = useState();
  const [img, setImg] = useState();
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    if (!data) return;

    setPlanets(data[0]);
  }, [data]);

  useEffect(() => {
    if (!planets) return;

    setText(planets.overview.content);
    setImg(planets.images.planet);
  }, [planets]);

  useEffect(() => {
    setSelectedIndex(1);
  }, [name]);

  return (
    <>
      {planets && (
        <div className={styles.container}>
          <div className={styles.planetContainer}>
            <div className={styles.planetImg}>
              <img src={img} alt="" />
            </div>
            <div className={styles.planetContent}>
              <h1>{planets.name}</h1>
              <p>{text}</p>
              <div className={styles.spanFlex}>
                <span>Source:</span>
                <a target="_blank" href={planets.overview.source}>
                  Wikepedia
                </a>
                <img src="../assets/icon-source.svg" alt="" />
              </div>
              <div className={styles.infoPlanets}>
                <ul>
                  <li
                    style={{
                      background:
                        selectedIndex === 1 ? planets.color : "transparent",
                    }}
                    onClick={() => {
                      setSelectedIndex(1);
                      setText(planets.overview.content);
                      setImg(planets.images.planet);
                    }}
                  >
                    <span>01</span>Overview
                  </li>
                  <li
                    style={{
                      background:
                        selectedIndex === 2 ? planets.color : "transparent",
                    }}
                    onClick={() => {
                      setSelectedIndex(2);
                      setText(planets.structure.content);
                      setImg(planets.images.internal);
                    }}
                  >
                    <span>02</span>Internal Structure
                  </li>
                  <li
                    style={{
                      background:
                        selectedIndex === 3 ? planets.color : "transparent",
                    }}
                    onClick={() => {
                      setSelectedIndex(3);
                      setText(planets.geology.content);
                      setImg(planets.images.geology);
                    }}
                  >
                    <span>03</span>
                    Surface Geology
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.cardsInfo}>
            <div className={styles.card}>
              <p>ROTATION TIME</p>
              <p>{planets.rotation}</p>
            </div>
            <div className={styles.card}>
              <p>REVOLUTION TIME</p>
              <p>{planets.revolution}</p>
            </div>
            <div className={styles.card}>
              <p>RADIUS</p>
              <p>{planets.radius}</p>
            </div>
            <div className={styles.card}>
              <p>AVERAGE TEMP</p>
              <p>{planets.temperature}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Planet;
