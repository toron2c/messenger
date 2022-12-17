import style from './../ProfileAbout.module.scss'

let i = 0;

export const ProfileAboutName = ( { name, toggleNewName } ) => {

    console.log( `render PROFILE ABOUT NAME ${i++}` )

    return (
        <div className={style.containerField}>
            <p className={style.containerFieldTitle}>name:</p>
            <p className={style.containerFieldValue}>{name ? name : 'empty'}</p>
        </div>
    )
}