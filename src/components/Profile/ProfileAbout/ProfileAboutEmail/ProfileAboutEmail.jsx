import style from './../ProfileAbout.module.scss'


export const ProfileAboutEmail = ( { email } ) => {

    return (
        <div className={style.containerField}>
            <p className={style.containerFieldTitle}>email:</p>
            <p className={style.containerFieldValue}>{email}</p>
        </div>
    )
}