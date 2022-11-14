import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import style from './Chats.module.scss'
import { useParams } from "react-router-dom";

export default function Chats() {

    let { id } = useParams();
    console.log( id );
    return ( <div className={style.chats}>
        <Dialogs />
        <div className={style.messages}>
            {!id ? <p className={style.warning}>Please, choose your friend in your chat lists</p> : <Messages />}
        </div>
    </div> )
}