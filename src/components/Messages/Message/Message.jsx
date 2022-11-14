import style from './message.module.scss'


export function Message( { Message } ) {
    return ( <div >
        <div className={style.text}>{Message}</div>
    </div> )
}