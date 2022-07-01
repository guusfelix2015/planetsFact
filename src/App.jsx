import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Planet from "./pages/Planet/Planet";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/planets/mercury" />} />
          <Route path="planets/:name" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
