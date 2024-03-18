import style from './ErrorPage.module.scss'


export default function ErrorPage() {

    return ( <div className={style.errorPage}>
        <p className={style.text} >Page not found :(</p>
    </div> )
}