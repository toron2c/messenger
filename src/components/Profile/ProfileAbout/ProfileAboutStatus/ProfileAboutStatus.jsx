import style from './../ProfileAbout.module.scss'


export const ProfileAboutStatus = ( { status } ) => {

    return (
        <div className={style.containerField}>
            <p className={style.containerFieldTitle}>status:</p>
            <p className={style.containerFieldValue}>{status ? status : 'empty'}</p>
        </div>
    )
}