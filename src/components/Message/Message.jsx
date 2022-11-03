import style from './message.module.scss'


export function Message( { Message } ) {
    return ( <div className={style.box}>
        <div className={style.text}>{Message}</div>
    </div> )
}