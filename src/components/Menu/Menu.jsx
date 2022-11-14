import { Button } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import style from './Menu.module.scss'

export default function Menu() {

    return ( <div className={style.app}>
        <div className={style.menu}>
            <nav>
                <ul className={style.list}>
                    <li><NavLink className={style.link} to="/">
                        {( { isActive } ) => (
                            isActive ? <Button variant="contained" style={{ padding: '7px 35px' }}>Home</Button> :
                                <Button style={{ padding: '7px 35px' }} variant="outlined">Home</Button>
                        )}
                    </NavLink></li>
                    <li><NavLink className={style.link} to="/profile">
                        {( { isActive } ) => (
                            isActive ? <Button style={{ padding: '7px 35px' }} variant="contained" href="#contained-buttons" >Profile</Button> :
                                <Button style={{ padding: '7px 35px' }} variant="outlined">Profile</Button>
                        )}
                    </NavLink></li>
                    <li><NavLink className={style.link} to="/chats">
                        {( { isActive } ) => (
                            isActive ? <Button style={{ padding: '7px 35px' }} variant="contained" href="#contained-buttons" >Chats</Button> :
                                <Button style={{ padding: '7px 35px' }} variant="outlined">Chats</Button>
                        )}
                    </NavLink></li>
                </ul>
            </nav>
        </div>
        <Outlet />
    </div>
    )
}