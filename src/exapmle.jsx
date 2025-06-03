const ProductCard = () => {
  return (
    <>
      <div className="productCard">
        <div className="productCard_top">
          <div className="productCard_main-info">
            <div className="productCard_img">
              <img src="" alt="" />
            </div>
            <div className="productCard_status"></div>
            <div className="productCard_btns">
              <button className="productCard_btn baasket"></button>
              <button className="productCard_btn fav"></button>
            </div>
          </div>
          <h3 className="productCard_name"></h3>
          <ul className="productCard_sizes">
            <li className="productCard_size-item"></li>
            <li className="productCard_size-item"></li>
            <li className="productCard_size-item"></li>
          </ul>
        </div>
        <div className="productCard_bottom">
          <div className="productCard_bottom-info">
            <div className="productCard_price">
              <div className="productCard_price_main-price"></div>
              <div className="productCard_price_old-price"></div>
            </div>
            <ul className="productCard_colors">
              <li className="productCard_color-item">
                <span style="background:"></span>
              </li>
            </ul>
          </div>
          <div className="productCard_action">
            <button className="btn-main">Купить в 1 клик</button>
            <a href="#" className="link-main">
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
