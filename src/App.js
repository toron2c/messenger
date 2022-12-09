import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import firebase from './services/firebase'
import Chats from './components/Chats/Chats';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Registration from './components/RegistrationPage/Registration';

const Characters = React.lazy( () => import( './components/CharactersPage/Characters' ) )

function App() {

  return ( <div>
    <div className='box'>
      <Routes>
        <Route path={'/'} element={<Menu />}>
          <Route index element={<Home />} />
          <Route path={'registration'} element={<Registration />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'chats'} element={<Chats />} >
            <Route path={':id'} element={<Chats />} />
          </Route>
          <Route path={'characters'} element={<React.Suspense><Characters /></React.Suspense>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  </div>
  )
}

export default App;
