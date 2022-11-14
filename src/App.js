import './App.scss';
import Chats from './components/Chats/Chats';
import Menu from './components/Menu/Menu';


function App() {


  return ( <div>
    <div className='box'>
      <Menu />
      <Chats />
    </div>
  </div>
  )
}

export default App;
