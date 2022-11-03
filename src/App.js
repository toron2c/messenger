import './App.css';
import { Message } from './components/Message/Message';

function App() {
  const Text = "Hello? How Are you?"
  return ( <div>
    <Message Message={Text} />
  </div>
  )
}

export default App;
