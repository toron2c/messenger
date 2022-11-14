import { NavLink, Outlet } from 'react-router-dom'
import style from './Menu.module.scss'

export default function Menu() {

    return ( <div className={style.app}>
        <div className={style.menu}>
            <nav>
                <ul className={style.list}>
                    <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/">
                        {/* {( { isActive } ) => (
                            isActive ? <Button variant="contained" style={{ padding: '7px 35px' }}>Home</Button> :
                                <Button style={{ padding: '7px 35px' }} variant="outlined">Home</Button>
                        )} */}
                        Home
                    </NavLink></li>
                    <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/profile">
                        Profile
                    </NavLink></li>
                    <li><NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/chats">
                        Chats
                    </NavLink></li>
                </ul>
            </nav>
        </div>
        <Outlet />
    </div>
    )
}