import { useEffect, useState } from 'react';
import './App.scss';
import { Message } from './components/Message/Message';

function App() {
  const [messageList, setMessageList] = useState( [] );
  const [textMessage, setTextMessage] = useState( "" );
  const [isTime, setIsTime] = useState( false );
  useEffect( () => {
    if ( messageList.length > 0 && messageList[messageList.length - 1].author === 'user' ) {
      let timer = setTimeout( () => {
        setMessageList( [...messageList, { text: "Я всего лишь робот, который умеет только писать это сообщение :(" }] );
        setIsTime( false );
      }, 1500 )
      return () => {
        clearTimeout( timer );
      }
    }

  }, [messageList] )

  const onChangeInput = ( e ) => {
    e.preventDefault();
    setTextMessage( e.target.value );
  }
  const onSendMessage = ( e ) => {
    e.preventDefault();
    if ( textMessage === '' ) return;
    setMessageList( [...messageList, { text: textMessage, author: 'user' }] );
    setTextMessage( '' );
    setIsTime( true );
  }
  let messages = messageList.map( ( el, idx ) => <Message Message={el.text} author={el.author} key={idx} /> );
  return ( <div className='box'>
    <div className='messages'>
      {messages && messages}
    </div>
    <div className='controllers'>
      {isTime ? <div className='textAlert'>Подождите! Робот, думает что ответить.....</div> : <div className='controllersInput'><textarea type={'text'} value={textMessage} onChange={onChangeInput} />
        <button onClick={onSendMessage}>send message</button></div>}
    </div>
  </div>
  )
}

export default App;
