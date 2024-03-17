import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getListCharacters } from "../../../redux/actions";
import { getInfo } from "../../../redux/reducers/catsReducer/selectorCharacters";
import style from './../Characters.module.scss'


export const CharactersController = () => {
    const dispatch = useDispatch();

    const { prev, next } = useSelector( getInfo(), shallowEqual );
    const onClickNextPage = ( e, page ) => {
        e.preventDefault();
        dispatch( getListCharacters( page ) );
    }
    return (
        <div className={style.controllers}>
            <div><button className={style.button} variant="contained" disabled={prev ? false : true} onClick={( e ) => { onClickNextPage( e, prev ) }}>left</button></div>
            <div><button className={style.button} variant="contained" disabled={next ? false : true} onClick={( e ) => { onClickNextPage( e, next ) }}>right</button></div>
        </div> )
}