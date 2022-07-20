import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const url = "https://projectsfacts.herokuapp.com/planets";
  const { data: planets } = useFetch(url);

  const [navActive, setNavActive] = useState(styles.links);
  const [toggleIcon, setToggleIcon] = useState(styles.navToggle);

  const navToggle = () => {
    navActive === styles.links
      ? setNavActive(`${styles.links} ${styles.navActive} `)
      : setNavActive(styles.links);

    toggleIcon === styles.navToggle
      ? setToggleIcon(`${styles.navToggle} ${styles.toggle}`)
      : setToggleIcon(styles.navToggle);
  };

  return (
    <header>
      <nav className={styles.navigate}>
        <Link className={styles.logo} to="/">
          The Planets
        </Link>
        <ul className={navActive}>
          {planets &&
            planets.map((planet) => (
              <li key={planet.id}>
                <Link
                  onClick={() => setToggleIcon(styles.styles.navToggle)}
                  to={`/planets/${planet.name}`}
                >
                  {planet.name}
                </Link>
              </li>
            ))}
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
