import { useDispatch } from "react-redux";
import { removeChat } from "../../../../../redux/actions";
import styles from '../DialogItem.module.scss'


export default function DialogItemButtonRemove( { id } ) {
    const dispatch = useDispatch();

    const removeButtonHandler = ( e ) => {
        e.preventDefault();
        dispatch( removeChat( id ) );
    }
    return (
        <>
            <div onClick={removeButtonHandler} className={styles.removeButton}>X</div>
        </>
    )
}