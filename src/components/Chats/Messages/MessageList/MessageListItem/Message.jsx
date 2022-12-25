import { useEffect } from 'react'
import style from './message.module.scss'


export function Message( { el } ) {
    let time = new Date( el.TimestampServer ? el.TimestampServer : new Date() );
    useEffect( () => {
        let el = document.getElementById( 'lastElement' ); el.scrollIntoView( { behavior: 'smooth' } );
    }, [] )
    return (
        <div className={el.author === 'you' ? style.user : style.bot}>
            <div className={style.text}>
                {el.message}
                <div className={style.time}>{time.getHours()} : {( time.getMinutes() < 10 ? '0' : '' ) + time.getMinutes()}</div>
            </div>

        </div>
    )
}