import React from 'react';


import style from './Menu.module.scss'
import MenuAuthButtons from './MenuAuthButtons/MenuAuthButtons';
import MenuItems from './MenuItems/MenuItems';
import MenuOutlet from './MenuOutlet';


export default function Menu( { isAuth } ) {



    return ( <div className={style.app}>
        <header className={style.menu}>
            <MenuItems isAuth={isAuth} />
            <MenuAuthButtons isAuth={isAuth} />
        </header>
        <main className={style.main}>
            <MenuOutlet />

        </main>
    </div>
    )
}

// export default React.memo( Menu )