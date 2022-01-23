import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './app.scss';
import InputForm from './components/input_form';
import MessagesContainer from './components/messages/messages_container';
import { addMessage } from './duck';

const ws = new WebSocket('ws://localhost:8080');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ws.onmessage = function message({ data }) {
      data.text().then(message => dispatch(addMessage(JSON.parse(message))));
    };
  }, [dispatch]);

  return (
    <div className='container'>
      <MessagesContainer />
      <InputForm />
    </div>
  );
}

export default App;
