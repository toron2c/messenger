import { Typography } from "@mui/material";
import style from './Home.module.scss'
import { HomeLogin } from "./HomeLogin/HomeLogin";
import { HomeDescription } from "./description/Home__description";


export default function Home( { isAuth } ) {
    return (
        <div className={style.home}>
            <Typography className={style.logo} variant="h1">Messenger 2000</Typography>
            {!isAuth && <div><Typography className={style.home__hi} variant="h4">Добро пожаловать!</Typography></div>}
						{!isAuth && <div><Typography className={style.home__hi} variant="subtitle1">Вы можете авторизоваться или зарегистрирваться</Typography></div>}
						{!isAuth && <HomeLogin />}
						{isAuth && <HomeDescription/>}
        </div>
    )
}