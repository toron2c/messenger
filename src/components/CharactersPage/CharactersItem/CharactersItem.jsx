
import style from './CharactersItem.module.scss'

export const CharactersItem = ( { image, name } ) => {

    return ( <div className={style.item}>
        <div>
            <img className={style.ava} src={image} alt={"ava"} />
        </div>
        <div className={style.name}>{name}</div>
    </div> )
}