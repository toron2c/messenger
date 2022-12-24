import { useEffect } from 'react'
import style from './message.module.scss'

export function Message( { Message, time } ) {
    useEffect( () => {
        let el = document.getElementById( 'lastElement' ); el.scrollIntoView( { behavior: 'smooth' } );
    }, [] )
    return (
        <div>
            <div className={style.text}>
                {Message}
                {/* <div className={style.time}>{time.getHours()} : {time.getMinutes()}</div> */}
            </div>

        </div>
    )
}