import style from './../ProfileAbout.module.scss'


export const ProfileAboutName = ( { name, toggleNewName } ) => {


    return (
        <div className={style.containerField}>
            <p className={style.containerFieldTitle}>name:</p>
            <p className={style.containerFieldValue}>{name ? name : 'empty'}</p>
        </div>
    )
}