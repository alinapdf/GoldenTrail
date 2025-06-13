import "./OrderEasily.scss";

function OrderEasily() {
  return (
    <div className="OrderEasily-container">
      <div className="OrderEasily-Title">
        <h2>Закажите легко</h2>
        <p>Оставьте заявку и мы свяжемся с вами в ближайшее время</p>
      </div>
      <div className="OrderEasily-Registration">
        <input placeholder="E-mail*" type="email" />
        <input placeholder="+994-__-___-__-__" />
        <input placeholder="Введите пароль" />
        <input placeholder="Повторите пароль" />
        <p>
          Соглашаюсь на обработку <span>персональных данных</span> и с условиями
          <span>публичной оферты</span>
        </p>
        <button className="OrderEasily-btn">Отправить</button>
      </div>
    </div>
  );
}

export default OrderEasily;
