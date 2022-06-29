import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Header.module.css";

const Header = ({ setPlanetId }) => {
  const url = "http://localhost:3000/planets";
  const { data: planets } = useFetch(url);

  return (
    <header>
      <nav className={styles.marginTop}>
        {planets &&
          planets.map((planet) => (
            <Link
              onClick={() => setPlanetId(planet.id)}
              key={planet.id}
              to={planet.name}
            >
              {planet.name}
            </Link>
          ))}
      </nav>
    </header>
  );
};

export default Header;
