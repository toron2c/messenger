import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import style from './Chats.module.scss'

export default function Chats() {

    return ( <div className={style.chats}>
        <Dialogs />
        <div className={style.messages}><Messages /></div>
    </div> )
}