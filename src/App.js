import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Chats from './components/Chats/Chats';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';


function App() {


  return ( <div>
    <div className='box'>
      <Routes>
        <Route path={'/'} element={<Menu />}>
          <Route index element={<Home />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'chats'} element={<Chats />} />
          <Route path={'chats/:id'} element={<Chats />} />
        </Route>
      </Routes>
    </div>
  </div>
  )
}

export default App;
