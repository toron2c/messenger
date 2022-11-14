import { Breadcrumbs, Link } from '@mui/material'
import style from './Menu.module.scss'

export default function Menu() {

    return ( <div className={style.menu}>
        <nav>
            <Breadcrumbs aria-label="breadcrumb" separator="">
                <Link underline="hover" className={style.link}>
                    Home
                </Link>
                <Link underline="hover" className={style.link}>
                    Profile
                </Link>
                <Link underline="hover" className={style.link}>
                    Chats
                </Link>
            </Breadcrumbs>
        </nav>
    </div> )
}