import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Box } from '../shared';
import './messages_view.scss';

function MessagesView({ messages }) {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <Box className='messages-container' ref={scrollRef}>
      {
        messages.length ? messages.map(({ message, userName, timestamp }) => (
          <div className='message-container' key={`${userName}_${timestamp}}`}>
            <p className='username'>{userName}</p>
            <p className='message'>{message}</p>
          </div>
        )) : 'No messages yet'
      }
    </Box>
  );
}

MessagesView.propTypes = {
  messages: PropTypes.arrayOf(Object).isRequired
};

export default MessagesView;
