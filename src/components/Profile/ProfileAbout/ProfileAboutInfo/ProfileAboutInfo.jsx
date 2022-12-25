import style from './../ProfileAbout.module.scss'


export const ProfileAboutInfo = ( { about } ) => {

    return (
        <div className={style.containerFieldAbout}>
            <p className={style.containerFieldTitle}>about:</p>
            <p className={style.containerFieldValueAbout}>{about ? about : 'empty'}</p>
        </div>
    )
}