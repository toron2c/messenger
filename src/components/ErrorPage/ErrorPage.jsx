import { Typography } from '@mui/material'
import style from './ErrorPage.module.scss'


export default function ErrorPage() {

    return ( <div className={style.ErrorPage}>
        <Typography className={style.text} variant="h1">Page not found</Typography>
    </div> )
}