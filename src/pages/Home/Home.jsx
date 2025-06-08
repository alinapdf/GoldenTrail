import About from "../../components/About/About";
import Advantages from "../../components/Advantages/Advantages";
import BestSellers from "../../components/BestSellers/BestSellers";
import CardItem from "../../components/CardItem/CardItem";
import ChoseProffesional from "../../components/ChoseProffesional/ChoseProffesional";
import NewProducts from "../../components/NewProducts/NewProducts";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import WideUsage from "../../components/WideUsage/WideUsage";

function Home() {
  return (
    <>
      <CardItem />
      <About />
      <ProductCategories />
      <NewProducts />
      <BestSellers />
      <ChoseProffesional />
      <WideUsage />
      <Advantages />
    </>
  );
}

export default Home;
