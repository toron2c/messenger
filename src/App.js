import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Messages from './components/Messages/Messages';


function App() {


  return ( <div className='box'>
    <div className={'dialogs'}><Dialogs /></div>
    <div className={'messages'}><Messages /></div>
  </div>
  )
}

export default App;
