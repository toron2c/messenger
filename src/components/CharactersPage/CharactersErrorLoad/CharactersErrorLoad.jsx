import { useDispatch, useSelector } from 'react-redux'
import { getListCharacters } from '../../../redux/actions';
import style from './../Characters.module.scss'


export const CharactersErrorLoad = ( { error } ) => {

    const dispatch = useDispatch();
    const page = useSelector( state => state.characters.err.errPage );

    const reloadHandler = ( e ) => {
        e.preventDefault();
        dispatch( getListCharacters( page ) );
    }


    return (
        <div className={style.error}>
            {error}
            <div className={style.reloadBox}>
                <button onClick={reloadHandler} className={style.reload}>
                    Reload
                </button>
            </div>
        </div>
    )
}