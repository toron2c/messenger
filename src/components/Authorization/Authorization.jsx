import { NavLink, useLocation } from 'react-router-dom'
import style from './Authorization.module.scss'
import { Registration } from './Registration/Registration';
import Login from './Login/Login';


export default function Authorization() {
    const path = useLocation();
    return (
      
            <div className={style.authorize}>
                <div className={style.boxInputs}>
                    {path.pathname === '/login' ? <Login /> : <Registration />}
                </div>
                {path.pathname === '/login' ?
                    <div className={style.boxCreateAccount}>
                        Впервые здесь?<NavLink to='/registration' className={style.link}>Создать аккаунт</NavLink>
                    </div>
                    : <div className={style.boxCreateAccount}>Уже зарегестрированы?<NavLink to='/login' className={style.link}>Войти</NavLink> </div>}
           
						</div>
        
    )

}