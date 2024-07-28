import style from "./Home.module.scss";
import { HomeLogin } from "./HomeLogin/HomeLogin";

export default function Home({ isAuth }) {
  return (
    <div className={style.home}>
      <h1 className={style.home__logo} variant="h1">
        {"<"}Messenger 2000{"/>"}
      </h1>
      <div class={style.ad}>
        В поисках дизайнера
        <p>telegram: @toron2c</p>
        <a class={style.link} href="https://t.me/toron2c">
          ссылка
        </a>
      </div>
      {!isAuth && (
        <>
          <p className={style.home__text}>Добро пожаловать!</p>
          <p className={style.home__text}>
            Вы можете зарегистрирваться или авторизоваться.
          </p>
        </>
      )}
      {!isAuth && <HomeLogin />}
      {isAuth && (
        <>
          <p className={style.home__text}>
            Вы находитесь на сайте Messenger2000
          </p>
          <p className={style.home__text}>Мессенджер в реальном времени </p>
        </>
      )}
    </div>
  );
}
