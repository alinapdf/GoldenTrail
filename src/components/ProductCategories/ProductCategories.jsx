import "./ProductCategories.scss";

import person from "../../assets/img/person.png";
import bahyli from "../../assets/img/bahyli.png";
import dezenfekiciya from "../../assets/img/dezenfekciya.png";

function ProductCategories() {
  const categories = [
    { id: 1, name: "Рентгенозащитная одежда", bg: person },
    { id: 2, name: "Одноразовая продукция", bg: bahyli },
    { id: 3, name: "Антисептики и дезинфекция", bg: dezenfekiciya },
  ];

  return (
    <div className="product-categories">
      <h2>Категории товаров</h2>
      <div className="product-categories-list">
        {categories.map((category) => (
          <div
            key={category.id}
            className="product-category-card"
            style={{ backgroundImage: `url(${category.bg})` }}
          >
            <div className="product-category-name">{category.name}</div>
            <button className="btn-main btn">Перейти в каталог</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;
