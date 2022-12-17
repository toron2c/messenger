import { useDispatch } from 'react-redux'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { logoutAuthWithSaga } from '../../redux/actions'
import style from './Menu.module.scss'


export default function Menu( { isAuth } ) {
    const dispatch = useDispatch();
    const onClickLogout = ( e ) => {
        e.preventDefault();
        dispatch( logoutAuthWithSaga() );
    }

    return ( <div className={style.app}>
        <header className={style.menu}>
            <nav className={style.menuNavigation}>
                <ul className={style.list}>
                    <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/">
                        Home
                    </NavLink></li>
                    {isAuth && <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/profile">
                        Profile
                    </NavLink></li>}
                    {isAuth && <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/chats">
                        Chats
                    </NavLink></li>}
                    <li>
                        <NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/characters">
                            Characters
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/Registration">
                            Registration
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
            {isAuth ?
                <Link className={style.authButton} onClick={onClickLogout}>LOGOUT</Link>
                : <Link className={style.authButton} to='/login'>Sign In</Link>}
        </header>
        <main className={style.main}>
            <Outlet />
        </main>
    </div>
    )
}