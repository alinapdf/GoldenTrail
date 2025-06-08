function SelectedItem() {
  return (
    <div className="container-SelectedItem">
      <h2>Товары в корзине</h2>
      <div className="SelectedItem-Block">
        <div className="SelectedItem-Block-Obj">
          <div className="SelectedItem-img">
            <img />
          </div>
          <div className="SelectedItem-Blok-desc">
            <h3>Рентгенозащитный воротник щитовидной железы</h3>
            <ul className="SelectedItem-Menu">
              <li className="SelectedItem-Item-Color">
                <div className="SelectedItem-Color">Цвет</div>
                {/* <div className="SelectedItem-Selected-Color">
                  <span style={{ background: color }}></span>
                </div> */}
              </li>
              <li className="SelectedItem-Item-Size">
                <div>Размер</div>
                <div>S</div>
              </li>
              <li className="SelectedItem-Item-Quantity">
                <div>Количество</div>
                <div>1</div>
              </li>
            </ul>
          </div>
          <div className="SelectedItem-Total-Price">
            <div className="SelectedItem-New-Price">9 300 ₽</div>
            <div className="SelectedItem-Old-Price">12 400 ₽</div>
            <div className="SelectedItem-counter"></div>
            <button>Удалить</button>
          </div>
        </div>
        <div className="SelectedItem-Block-Total-Price"></div>
      </div>
    </div>
  );
}

export default SelectedItem;

// const ProductCard = () => {
//   return (
//     <>
//       <div className="productCard">
//         <div className="productCard_top">
//           <div className="productCard_main-info">
//             <div className="productCard_img">
//               <img src="" alt="" />
//             </div>
//             <div className="productCard_status"></div>
//             <div className="productCard_btns">
//               <button className="productCard_btn baasket"></button>
//               <button className="productCard_btn fav"></button>
//             </div>
//           </div>
//           <h3 className="productCard_name"></h3>
//           <ul className="productCard_sizes">
//             <li className="productCard_size-item"></li>
//             <li className="productCard_size-item"></li>
//             <li className="productCard_size-item"></li>
//           </ul>
//         </div>
//         <div className="productCard_bottom">
//           <div className="productCard_bottom-info">
//             <div className="productCard_price">
//               <div className="productCard_price_main-price"></div>
//               <div className="productCard_price_old-price"></div>
//             </div>
//             <ul className="productCard_colors">
//               <li className="productCard_color-item">
//                 <span style="background:"></span>
//               </li>
//             </ul>
//           </div>
//           <div className="productCard_action">
//             <button className="btn-main">Купить в 1 клик</button>
//             <a href="#" className="link-main">
//               Подробнее
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;
