import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import BestSellers from "./components/BestSellers/BestSellers";
import CardItem from "./components/CardItem/CardItem";
import ChoseProffesional from "./components/ChoseProffesional/ChoseProffesional";
import Header from "./components/Header/Header";
import NewProducts from "./components/NewProducts/NewProducts";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import WideUsage from "./components/WideUsage/WideUsage";

function App() {
  return (
    <>
      <Header />
      <CardItem />
      <About />
      <ProductCategories />
      <NewProducts />
      <BestSellers />
      <ChoseProffesional />
      <WideUsage />
      <Advantages />
      <main>main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
