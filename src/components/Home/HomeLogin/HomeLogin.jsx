import { Link } from "react-router-dom"
import style from './HomeLogin.module.scss'


export const HomeLogin = () => {

    return (
        <ul className={style.list}>
            <li>
                <Link to='/login' className={style.listLink}>
                    Sign In
                </Link>
            </li>
            <li>
                <Link to='/registration' className={style.listLink}>
                    Sign Up
                </Link>
            </li>
        </ul>
    )
}