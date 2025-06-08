import Header from "./components/Header/Header";
import AboutPages from "./pages/About/About";
import Busket from "./pages/Busket/Busket";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/Busket" element={<Busket />} />
      </Routes>

      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
