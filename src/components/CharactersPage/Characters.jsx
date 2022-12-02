import { useCallback, useEffect, useMemo } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getListCharacters } from "../../redux/actions";
import { CharactersItem } from "./CharactersItem/CharactersItem";
import style from './Characters.module.scss'
import { CharactersController } from "./CharactersController/CharactersController";
import { CharactersErrorLoad } from "./CharactersErrorLoad/CharactersErrorLoad";
import { getErrorMessage, getList } from "../../redux/reducers/catsReducer/selectorCharacters";




export default function Characters() {
    const dispatch = useDispatch();
    const getListMemo = useMemo( () => getList(), [] );
    const List = useSelector( getListMemo, shallowEqual );
    const getError = useCallback( () => getErrorMessage(), [] )
    const error = useSelector( getError() );

    useEffect( () => {
        if ( List.length === 0 && !error ) {
            dispatch( getListCharacters() )
        }
    }, [List, dispatch, error] )


    let list = List.map( el => <CharactersItem image={el.image} name={el.name} key={el.id} /> )
    return (
        <>
            {error ? <CharactersErrorLoad error={error} /> :
                <div className={style.boxCharacters}>
                    <div className={style.boxCharactersList}>{list}</div>
                    <CharactersController />
                </div>}
        </>
    )
}