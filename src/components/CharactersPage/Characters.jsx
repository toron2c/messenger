import { useCallback, useEffect, useMemo } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getListCharacters, setAvatarWithSaga } from "../../redux/actions";
import { CharactersItem } from "./CharactersItem/CharactersItem";
import style from './Characters.module.scss'
import { CharactersController } from "./CharactersController/CharactersController";
import { CharactersErrorLoad } from "./CharactersErrorLoad/CharactersErrorLoad";
import { getErrorMessage, getList } from "../../redux/reducers/catsReducer/selectorCharacters";
import { getStatusAuth } from "../../redux/reducers/authReducer/selectorAuth";




export default function Characters() {
    const dispatch = useDispatch();
    const getListMemo = useMemo( () => getList(), [] );
    const List = useSelector( getListMemo, shallowEqual );
    const getError = useCallback( () => getErrorMessage(), [] )
    const error = useSelector( getError() );
    const auth = useSelector( getStatusAuth(), ( prev, next ) => prev.value !== next.value );
    useEffect( () => {
        if ( List.length === 0 && !error ) {
            dispatch( getListCharacters() )
        }
    }, [List, dispatch, error] )

    const onSetAvatarHandler = ( src ) => {
        dispatch( setAvatarWithSaga( src ) );
    }

    let list = List.map( el => <CharactersItem auth={auth} setAvatar={onSetAvatarHandler} image={el.image} name={el.name} key={el.id} /> )
    return (
        <>
            {error ? <CharactersErrorLoad error={error} /> :
                <div className={style.boxCharacters}>
                    <CharactersController />
                    <div className={style.boxCharactersList}>{list}</div>
                </div>}
        </>
    )
}