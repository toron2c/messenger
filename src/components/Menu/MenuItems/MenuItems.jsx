import React from 'react';
import { NavLink } from 'react-router-dom'
import style from '../Menu.module.scss'


export default function MenuItems( { isAuth } ) {
    return (
        <>
            <nav className={style.menuNavigation}>
                <ul className={style.list}>
                    <li>
											<NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/">
                        Home
                    		</NavLink>
										</li>
                    {isAuth && 
										<li>
											<NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/profile">
                        Profile
                    	</NavLink>
										</li>
										}
                    {isAuth && 
										<li>
											<NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/chats">
                        Chats
                    	</NavLink>
										</li>
										}
                    <li>
                      <NavLink className={( { isActive } ) => isActive ? style.active : style.link} to="/characters">
                          Characters
                      </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

// export default React.memo( MenuItems )