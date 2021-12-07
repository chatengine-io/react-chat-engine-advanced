import _ from 'lodash';
import axios from 'axios';

import {
  ChatProps,
  ChatsProps,
  MessageProps,
  MessagesProps,
} from '../interfaces';

type GetChats = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatCount: number,
  callback: (chats: Array<ChatProps>) => void
) => void;

const getLatestChats: GetChats = (
  projectId,
  myUsername,
  mySecret,
  chatCount,
  callback
) => {
  axios
    .get(`http://127.0.0.1:8000/chats/latest/${chatCount}/`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })
    .then((response) => {
      // props.onGetChats && props.onGetChats(response.data);
      callback(response.data);
    })

    .catch((error) => {
      console.log('Fetch Chats Error', error);
    });
};

type GetMessages = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  chatId: number,
  messageCount: number,
  callback: (chatId: number, messages: Array<MessageProps>) => void
) => void;

const getLatestMessages: GetMessages = (
  projectId,
  myUsername,
  mySecret,
  chatId,
  messageCount,
  callback
) => {
  axios
    .get(
      `http://127.0.0.1:8000/chats/${chatId}/messages/latest/${messageCount}/`,
      {
        headers: {
          'Public-Key': projectId,
          'User-Name': myUsername,
          'User-Secret': mySecret,
        },
      }
    )
    .then((response) => {
      // props.onGetMessages && props.onGetMessages(chatId, response.data)
      callback(chatId, response.data);
    })
    .catch((error) => {
      console.log('Fetch Latest Messages Error', error);
    });
};

type Fetch = (
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

export const getChatsAndMessages: Fetch = (
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
  // Get chats
  getLatestChats(projectId, myUsername, mySecret, chatCount, (chats) => {
    onGetChats(_.mapKeys(chats, 'id'));

    // Get active chat
    let currentChat = activeChatKey;
    if (!activeChatKey && chats.length > 0) {
      onGetActiveChat(chats[0].id);
    }

    // Get messages
    currentChat && // Only get if there is a chat
      getLatestMessages(
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
