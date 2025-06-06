import "./About.scss";

import AboutPic from "./aboutPic.png";

function About() {
  return (
    <div className="container-About">
      <h2>О нас</h2>
      <div className="about-block">
        <div className="About-Info">
          <div className="About-Descs">
            <div className="About-Desc">
              Компания Golden Trail MMC с 2022 года является эксклюзивным
              дистрибьютором Trivitron Healthcare Pvt Ltd в Азербайджане. Наша
              миссия — защита здоровья людей.
            </div>
            <div className="About-Desc">
              Мы предлагаем рентгенозащитную одежду Kiran Medical Systems,
              которая обеспечивает надёжную защиту медицинского персонала и
              пациентов. В ассортименте — мужские и женские модели, различные
              материалы и пошив по индивидуальным меркам.
            </div>
            <div className="About-Desc">
              Также мы поставляем одноразовые медицинские расходные материалы,
              антисептики и дезинфицирующие средства от ведущих мировых
              производителей для медицинских и косметологических учреждений.
            </div>
          </div>
          <button className="btn-main">Подробнее о компании</button>
        </div>
        <div className="AboutPic-img">
          <img src={AboutPic} />
        </div>
      </div>
    </div>
  );
}

export default About;
