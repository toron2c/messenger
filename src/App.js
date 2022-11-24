import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { apiGetCats } from './api/api';
import './App.scss';
import { Cats } from './components/CatsPage/Cats';
import Chats from './components/Chats/Chats';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

const requestCats = async () => {
  let data = await apiGetCats();
  try {
    console.log( data );
  } catch ( e ) {
    console.log( e );
  }
}

function App() {

  useEffect( () => {
    // let data = apiGetCats().catch( data => console.log( data ) );
    requestCats();
  }, [] )

  return ( <div>
    <div className='box'>
      <Routes>
        <Route path={'/'} element={<Menu />}>
          <Route index element={<Home />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'chats'} element={<Chats />} >
            <Route path={':id'} element={<Chats />} />
          </Route>
          <Route path={'cats'} element={<Cats />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  </div>
  )
}

export default App;
