import "./FilteredProducts.scss";
import { useState } from "react";

import up from "../../assets/img/up.svg";
import vector from "../../assets/img/Vector.svg";

import useProducts from "../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CardSlice";
import { addCartItem, productToCartItem } from "../../api/cart";
import { addFav } from "../../redux/AddFav";

import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../redux/CurrentProductSlice";

function FilteredProducts() {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const dispatch = useDispatch();

  const handleAddFav = (product) => {
    dispatch(addFav(product));
  };
  const products = useProducts();

  const Item = ({ product }) => {
    const [size, setSize] = useState(product.sizes?.[0] || "");
    const [color, setColor] = useState(product.colors?.[0] || "");

    const handleAdd = async () => {
      const selected = { ...product, selectedSize: size, selectedColor: color };
      dispatch(addItem(selected));
      try {
        const item = productToCartItem(selected, { size, color });
        await addCartItem(item);
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <div className="FilteredProducts-container">
      <h2>Рентгенозащитная продукция</h2>
      <div className="FilteredProducts-Buttons">
        <div className="FilteredProducts-filter">
          <div className="FilteredProducts-name">По умолчанию</div>
          <div className="FilteredProducts-img">
            <img src={up} />
          </div>
        </div>
        <button
          className="FilteredProducts-All"
          onClick={() => setShowAllFilters((prev) => !prev)}
        >
          <span className="FilteredProducts-All-name">Все фильтры</span>
          <div>
            <img src={vector} />
          </div>
        </button>
        <button className="FilteredProducts-delete">Очистить фильтры</button>
      </div>
      {showAllFilters && (
        <div className="FilteredProducts-All-buttns">
          <button className="FilteredProducts-All-btn">Фартуки</button>
          <button className="FilteredProducts-All-btn">Юбки и жителы</button>
          <button className="FilteredProducts-All-btn">Защитные халаты</button>
          <button className="FilteredProducts-All-btn">
            Комбинированные костюмы
          </button>
          <button className="FilteredProducts-All-btn">
            Брюшные и тазовые экраны
          </button>
          <button className="FilteredProducts-All-btn">Одеяла с защитой</button>
        </div>
      )}

      <div className="FilteredProducts-objs">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FilteredProducts;
