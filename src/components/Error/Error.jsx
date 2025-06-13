import Error from "../../assets/img/Error.svg";
import error404 from "../../assets/img/error404.png";
import { Link } from "react-router-dom";
import "./Error.scss";

function ErrorBlock() {
  return (
    <div className="Error-Container">
      <div className="Error-Imgs">
        <div className="Error-Four">
          <img src={error404} />
        </div>
        <div className="Error">
          <img src={Error} />
        </div>
      </div>
      <h2>Страница не найдена</h2>
      <p>
        К сожалению, запрашиваемая страница не существует или была удалена.
        Вернитесь на главную или воспользуйтесь меню навигации.
      </p>
      <Link to={"/"}>
        {" "}
        <button className="btn-main">На главную</button>
      </Link>
    </div>
  );
}

export default ErrorBlock;
