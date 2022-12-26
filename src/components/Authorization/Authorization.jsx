import { NavLink, useLocation } from 'react-router-dom'
import style from './Authorization.module.scss'
import { Registration } from './Registration/Registration';
import Login from './Login/Login';


export default function Authorization() {
    const path = useLocation();
    return (
        <>
            <div className={style.box}>
                <div className={style.boxInputs}>
                    {path.pathname === '/login' ? <Login /> : <Registration />}
                </div>
                {path.pathname === '/login' ?
                    <div className={style.boxCreateAccount}>
                        New to Chat? <NavLink to='/registration' className={style.link}>Create an account</NavLink>
                    </div>
                    : <div className={style.boxCreateAccount}>Already have an account? <NavLink to='/login' className={style.link}>Sign in</NavLink> </div>}
            </div>
            <div className={style.nativeAd}>
                <p>native advertising</p>
                <p>pojalusta voz'mite na rabotu!11!11!</p>
                <p className={style.nativeAdDescription}>created for fun and experience @toron2c©</p>
            </div>
        </>
    )

}