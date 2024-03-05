import { Typography } from "@mui/material";
import style from './Home.module.scss'
import { HomeLogin } from "./HomeLogin/HomeLogin";


export default function Home( { isAuth } ) {
    return (
        <div className={style.home}>
            <Typography className={style.logo} variant="h1">Messenger 2000</Typography>
            {!isAuth && <div><Typography className={style.home__hi} variant="h4">Добро пожаловать!</Typography></div>}
						{!isAuth && <div><Typography className={style.home__hi} variant="subtitle1">Вы можете авторизоваться или зарегистрирватьсяё</Typography></div>}
						{!isAuth && <HomeLogin />}
        </div>
    )
}