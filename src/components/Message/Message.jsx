import style from './message.module.scss'


export function Message( { Message, author } ) {
    return ( <div className={author}>
        <div className={style.text}>{Message}</div>
    </div> )
}