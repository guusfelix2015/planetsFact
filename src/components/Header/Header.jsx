import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Header.module.css";

const Header = () => {
  const url = "http://localhost:3000/planets";
  const { data: planets } = useFetch(url);

  return (
    <header>
      <nav className={styles.navigate}>
        <Link className={styles.logo} to="/">
          The Planets
        </Link>
        <ul className={styles.links}>
          {planets &&
            planets.map((planet) => (
              <li key={planet.id}>
                <Link to={`/planets/${planet.name}`}>{planet.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
