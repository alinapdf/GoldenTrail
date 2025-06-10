import "./Advantages.scss";

import advantagesStars from "../../assets/img/advantagesStars.svg";

function Advantages() {
  const products = [
    {
      id: 1,
      img: advantagesStars,
      name: "Надёжная защита",
      desc: "Продукция отвечает современным стандартам безопасности и эффективно защищает от воздействия радиации, бактерий и других внешних факторов.",
    },
    {
      id: 2,
      img: advantagesStars,
      name: "Широкий ассортимент",
      desc: "От рентгенозащитной одежды до антисептиков и одноразовой продукции — всё в одном месте.",
    },
    {
      id: 3,
      img: advantagesStars,
      name: "Подходит для разных сфер",
      desc: "Наши товары востребованы в медицине, косметологии, промышленности и службах безопасности.",
    },
    {
      id: 4,
      img: advantagesStars,
      name: "Удобство и комфорт",
      desc: "Продукция продумана до мелочей: удобный крой, гипоаллергенные материалы, простой уход.",
    },
  ];

  return (
    <div className="Advantages-wrapper">
      <div className="Advantages-inner">
        <h2 className="h2">Преимущества нашей продукции</h2>
        <div className="Advantages-objs">
          {products.map((product) => (
            <div className="Advantages-obj" key={product.id}>
              <div className="Advantages-img">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="Advantages-Name">{product.name}</div>
              <p className="Advantages-Desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
