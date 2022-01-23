import { useSelector } from 'react-redux';
import MessagesView from './messages_view';

function MessagesContainer() {
  const messages = useSelector((state) => state.messages.messages)
  return (
    <MessagesView messages={messages.slice(Math.max(messages.length - 10, 0))} />
  );
}

export default MessagesContainer;
