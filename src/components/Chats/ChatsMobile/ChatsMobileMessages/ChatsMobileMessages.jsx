import Messages from "../../Messages/Messages";
import style from './ChatsMobileMessages.module.scss'

export default function ChatsMobileMessages() {

    return (
        <div className={style.boxMessageMobile}>
            <Messages />
        </div>
    )
}