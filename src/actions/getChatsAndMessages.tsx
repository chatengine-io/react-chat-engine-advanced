import _ from 'lodash';

import { ChatsProps, MessagesProps } from '../interfaces';

import { getChatsBefore } from './chats/getChatsBefore';
import { getMessages } from './messages/getMessages';

type GetChatsAndMessages = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  activeChatKey: number | undefined,
  chatCount: number,
  messageCount: number,
  onGetChats: (chats: ChatsProps) => void,
  onGetActiveChat: (activeChatKey: number) => void,
  onGetMessages: (chats: MessagesProps) => void
) => void;

export const getChatsAndMessages: GetChatsAndMessages = (
  projectId,
  myUsername,
  mySecret,
  activeChatKey,
  chatCount,
  messageCount,
  onGetChats,
  onGetActiveChat,
  onGetMessages
) => {
  const now = new Date()
    .toISOString()
    .replace('T', ' ')
    .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);

  // Get chats
  getChatsBefore(projectId, myUsername, mySecret, now, chatCount, (chats) => {
    onGetChats(_.mapKeys(chats, 'id'));

    // Get active chat
    let currentChat = activeChatKey;
    if (!activeChatKey && chats.length > 0) {
      onGetActiveChat(chats[0].id);
      currentChat = chats[0].id;
    }

    // Get messages
    currentChat && // Only get if there is a chat
      getMessages(
        projectId,
        myUsername,
        mySecret,
        currentChat,
        messageCount,
        (chatId, messages) => {
          void chatId;
          onGetMessages(_.mapKeys(messages, 'created'));
        }
      );
  });
};
