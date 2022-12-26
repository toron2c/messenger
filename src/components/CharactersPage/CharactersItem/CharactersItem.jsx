import style from './CharactersItem.module.scss'

export const CharactersItem = ( { image, name, setAvatar, auth } ) => {



    return ( <div className={style.item}>
        <div>
            <img className={style.ava} src={image} alt={"ava"} />
        </div>
        <div className={style.name}>
            {name}
            <div >
                {auth ? <button onClick={( e ) => {
                    e.preventDefault();
                    setAvatar( image )
                }} className={style.buttonSetAvatar}>Set avatar</button> : ''}
            </div>
        </div>

    </div > )
}