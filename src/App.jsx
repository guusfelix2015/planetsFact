import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Mercury from "./pages/Mercury/Mercury";
import Venus from "./pages/Venus/Venus";
import Earth from "./pages/Earth/Earth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
