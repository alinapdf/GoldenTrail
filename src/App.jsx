import Header from "./components/Header/Header";
import AboutPages from "./pages/About/About";
import Busket from "./pages/Busket/Busket";
import Home from "./pages/Home/Home";
import Desc from "./pages/Desc/Desc";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import { useEffect, useState } from "react";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/Busket" element={<Busket />} />
        <Route path="/desc/:id" element={<Desc />} />
        <Route path="/LR" element={<LoginRegistration />} />
        <Route path="/Filter" element={<FilteredProducts />} />
      </Routes>

      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
