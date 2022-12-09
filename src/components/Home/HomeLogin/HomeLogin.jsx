import { NavLink } from "react-router-dom"
import style from './HomeLogin.module.scss'


export const HomeLogin = () => {

    return (
        <ul className={style.list}>
            <li>
                <NavLink className={style.listLink}>
                    Sign In
                </NavLink>
            </li>
            <li>
                <NavLink className={style.listLink}>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    )
}