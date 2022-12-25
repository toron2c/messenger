import { Button } from '@mui/material'
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
                <Button onClick={reloadHandler} className={style.reload} variant="contained">
                    Reload
                </Button>
            </div>
        </div>
    )
}