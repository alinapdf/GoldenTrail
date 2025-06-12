import Header from "./components/Header/Header";
import AboutPages from "./pages/About/About";
import Busket from "./pages/Busket/Busket";
import Home from "./pages/Home/Home";
import Desc from "./pages/Desc/Desc";
import { Routes, Route } from "react-router-dom";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration";

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
      </Routes>

      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
