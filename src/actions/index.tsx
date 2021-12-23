export * from './messages/getMessages';
export * from './messages/newMessage';
export * from './messages/readMessage';

export * from './chats/deleteChat';
export * from './chats/getChatsBefore';
export * from './chats/newChat';

export * from './people/getPeopleToInvite';
export * from './people/invitePerson';
export * from './people/removePerson';

export { getOrCreateChat } from './deprecated/getOrCreateChat';

export const getHost = (isDevelopment?: boolean): string => {
  if (isDevelopment) {
    return 'http://127.0.0.1:8000';
  } else {
    return 'https://api.chatengine.io';
  }
};
