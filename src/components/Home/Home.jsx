import { Typography } from "@mui/material";
import style from './Home.module.scss'
import { HomeLogin } from "./HomeLogin/HomeLogin";


export default function Home( { isAuth } ) {
    return (
        <div className={style.home}>
            <Typography className={style.logo} variant="h1">Messenger 2000</Typography>
            {!isAuth && <HomeLogin />}
        </div>
    )
}