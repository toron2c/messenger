import Dialogs from "../Dialogs/Dialogs";
import DialogsNewChat from "../InputNewChat/DialogsNewChat";
import style from './ChatsMobile.module.scss'


export default function ChatsMobile() {

    return (
        <div className={style.containerDialogs}>
            <div className={style.dialogs}>
                <Dialogs />
            </div>
            <div className={style.containerDialogs__newChat}>
                <DialogsNewChat />
            </div>
        </div>
    )
}