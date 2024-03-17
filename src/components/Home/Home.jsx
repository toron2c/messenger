import style from './Home.module.scss'
import { HomeLogin } from "./HomeLogin/HomeLogin";

export default function Home( { isAuth } ) {
    return (
        <div className={style.home}>
            <h1 className={style.home__logo} variant="h1">Messenger 2000</h1>
            {!isAuth && <>
							<p className={style.home__hi}>Добро пожаловать!</p>
							<p className={style.home__hi}>
								Вы можете зарегистрирваться или авторизоваться.
							</p>
						</>}
						{!isAuth && <HomeLogin />}
						{isAuth && 
						<>
						<p className={style.home__hi}>Вы находитесь на сайте Messenger2000</p>
						<p className={style.home__hi}>Мессенджер в реальном времени  </p>
						</>}
        </div>
    )
}