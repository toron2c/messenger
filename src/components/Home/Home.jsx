import { Typography } from "@mui/material";
import style from './Home.module.scss'


export default function Home() {
    return ( <div className={style.home}>
        <Typography className={style.logo} variant="h1">Messenger 2000</Typography>
    </div> )
}