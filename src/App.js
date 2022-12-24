import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import PrivateRouter from './hocs/PrivateRouter'
import PublicRouter from './hocs/PublicRouter'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu'

import { shallowEqual, useSelector } from 'react-redux';
import { getStatusAuth } from './redux/reducers/authReducer/selectorAuth';

const Characters = React.lazy( () => import( './components/CharactersPage/Characters' ) );
const Chats = React.lazy( () => import( './components/Chats/Chats' ) )
const ChatsMobile = React.lazy( () => import( './components/Chats/ChatsMobile/ChatsMobile' ) )
const Profile = React.lazy( () => import( './components/Profile/Profile' ) )
const ErrorPage = React.lazy( () => import( './components/ErrorPage/ErrorPage' ) )
const Authorization = React.lazy( () => import( './components/Authorization/Authorization' ) )

function App() {

  const isAuth = useSelector( getStatusAuth(), shallowEqual );
  const windowInnerWidth = window.innerWidth;
  console.log( windowInnerWidth );
  return ( <div>
    <div className='box'>

      <Routes>
        <Route path={'/'} element={<Menu isAuth={isAuth} />}>
          <Route index element={<Home isAuth={isAuth} />} />
          <Route path={'registration'} element={
            <Suspense>
              <PublicRouter auth={isAuth}>
                <Authorization />
              </PublicRouter>
            </Suspense>
          } />
          <Route path={'login'} element={
            <Suspense>
              <PublicRouter auth={isAuth}>
                <Authorization />
              </PublicRouter>
            </Suspense>
          } />
          <Route path={'profile'} element={
            <Suspense>
              <PrivateRouter auth={isAuth}>
                <Profile />
              </PrivateRouter>
            </Suspense>
          } />
          {
            windowInnerWidth > 600 ?
              <Route path={'chats/'} element={
                <Suspense>
                  <PrivateRouter auth={isAuth}>
                    <Chats />
                  </PrivateRouter>
                </Suspense>
              }>
                <Route path={':id'} element={<Suspense><Chats /></Suspense>} />
              </Route> :
              <Route path={'/chats'} element={
                <Suspense>
                  <PrivateRouter auth={isAuth}>
                    <ChatsMobile />
                  </PrivateRouter>
                </Suspense>}>
              </Route>
          }

          {/* 
          <Route path={'chats/'} element={<Chats />} >
            <Route path={':id'} element={<Chats />} />
          </Route> */}
          <Route path={'characters'} element={<Suspense><Characters /></Suspense>} />
          <Route path="*" element={<Suspense><ErrorPage /></Suspense>} />
        </Route>
      </Routes>
    </div>
  </div >
  )
}

export default App;
