import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import style from './Chats.module.scss'
import DialogsNewChat from "./InputNewChat/DialogsNewChat";


export default function Chats() {
    return (
        <div className={style.chats}>
            <div className={style.containerDialog}>
                <div className={style.dialogs}>
                    <Dialogs />
                </div>
                <div className={style.chats__newDialogInput}>
                    <DialogsNewChat />
                </div>
            </div>
            <div className={style.messages}>
                <Messages />
            </div>
        </div>
    )
}