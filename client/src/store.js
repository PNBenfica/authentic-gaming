import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './chat/duck';

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
})
