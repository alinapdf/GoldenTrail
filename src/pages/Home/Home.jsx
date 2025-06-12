import About from "../../components/About/About";
import Advantages from "../../components/Advantages/Advantages";
import BestSellers from "../../components/BestSellers/BestSellers";
import CardItem from "../../components/CardItem/CardItem";
import ChoseProffesional from "../../components/ChoseProffesional/ChoseProffesional";
import NewProducts from "../../components/NewProducts/NewProducts";
import PopularBrands from "../../components/PopularBrands/PopularBrands";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import Reviews from "../../components/Reviews/Reviews";
import WideUsage from "../../components/WideUsage/WideUsage";
import Desc from "../Desc/Desc";

function Home() {
  return (
    <>
      <CardItem />
      <About />
      <PopularBrands />
      <ProductCategories />
      <NewProducts />
      <BestSellers />
      <ChoseProffesional />
      <WideUsage />
      <Advantages />
      <Reviews />
    </>
  );
}

export default Home;
