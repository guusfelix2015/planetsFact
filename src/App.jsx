import { useFetch } from "./hooks/useFetch";

import Header from "./components/Header/Header";

function App() {
  const url = "http://localhost:3000/planets";
  const { data: planets } = useFetch(url);

  return (
    <div>
      <Header />
      {/* <ul>
        {planets &&
          planets.map((planet, index) => (
            <li key={index}>
              {planet.name}
              <h2>{planet.structure.content}</h2>
            </li>
          ))}
      </ul> */}
    </div>
  );
}

export default App;
