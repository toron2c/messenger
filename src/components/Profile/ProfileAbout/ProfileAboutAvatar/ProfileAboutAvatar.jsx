import style from '../ProfileAbout.module.scss'

export const ProfileAboutAvatar = ( { avatar } ) => {

    return (
        <div>
            <img className={style.avatar} src={avatar ? avatar : ''} alt={'profile avatar'} height={'200'} />
        </div>
    )
}