import { useState } from 'react';
import { Box } from '../shared';
import './input_form.scss';

const ws = new WebSocket('ws://localhost:8080');

function InputForm() {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const canSubmit = !!(userName && message);

  const onSubmit = (event) => {
    event.preventDefault();
    ws.send(JSON.stringify({ message, userName, timestamp: new Date().getTime() }))
    setMessage('');
  }

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <input
          className='input'
          type='text'
          name='name'
          placeholder='Username'
          autoComplete='off'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className='input'
          type='text'
          name='message'
          placeholder='Message'
          autoComplete='off'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={`btn ${canSubmit ? '' : 'disabled'}`} type='submit'>Send</button>
      </form>
    </Box>
  );
}

export default InputForm;
