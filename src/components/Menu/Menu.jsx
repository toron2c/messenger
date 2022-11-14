import { Link } from '@mui/material'
import style from './Menu.module.scss'

export default function Menu() {

    return ( <div className={style.menu}>
        <nav>
            <Link href="#" underline="hover">
                {'underline="hover"'}
            </Link>
        </nav>
    </div> )
}