import Header from "./components/Header/Header";
import AboutPages from "./pages/About/About";
import Busket from "./pages/Busket/Busket";
import Home from "./pages/Home/Home";
import Desc from "./pages/Desc/Desc";
import { Routes, Route } from "react-router-dom";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import ResetParol from "./components/LoginRegistration/ResetParol/ResetParol";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/Busket" element={<Busket />} />
        <Route path="/desc/:id" element={<Desc />} />
        <Route path="/LR" element={<LoginRegistration />} />
        <Route path="/Filter" element={<FilteredProducts />} />
        <Route path="/LR/ResetParol" element={<ResetParol />} />
      </Routes>

      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
