import { Link } from "react-router-dom"
import style from './HomeLogin.module.scss'


export const HomeLogin = () => {

    return (
        <ul className={style.list}>
            <li>
                <Link to='/login' className={style.listLink}>
                    Авторизоваться
                </Link>
            </li>
            <li>
                <Link to='/registration' className={style.listLink}>
                    Зарегистрирваться
                </Link>
            </li>
        </ul>
    )
}