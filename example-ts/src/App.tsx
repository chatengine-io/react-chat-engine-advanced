import React, { useState } from 'react';

import {
  ChatEngine,
  ChatProps,
  ChatsProps,
  MessagesProps,
  Socket,
} from 'react-chat-engine-components';

import _ from 'lodash';
import axios from 'axios';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const getLatestChats = (
  projectId = '',
  myUsername = '',
  mySecret = '',
  count = 25,
  callback = (data: Array<ChatProps>) => {}
) => {
  axios
    .get(`http://127.0.0.1:8000/chats/latest/${count}/`, {
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

const getLatestMessages = (
  projectId = '',
  myUsername = '',
  mySecret = '',
  chatId = -1,
  count = 45,
  callback = (chatId: number, messages: Array<Object>) => {}
) => {
  axios
    .get(`http://127.0.0.1:8000/chats/${chatId}/messages/latest/${count}`, {
      headers: {
        'Public-Key': projectId,
        'User-Name': myUsername,
        'User-Secret': mySecret,
      },
    })
    .then((response) => {
      // props.onGetMessages && props.onGetMessages(chatId, response.data)
      callback(chatId, response.data);
    })
    .catch((error) => {
      console.log('Fetch Latest Messages Error', error);
    });
};

const App: React.FC = () => {
  const [activeChatKey, setActiveChatKey] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatsProps | undefined>();
  const [messages, setMessages] = useState<MessagesProps | undefined>();

  const onConnect = () => {
    getLatestChats(projectId, myUsername, mySecret, 25, (chats) => {
      const chatsData = _.mapKeys(chats, 'id') as ChatsProps;
      setChats(chatsData);

      let currentChat = activeChatKey;
      if (!currentChat && chats.length > 0) {
        currentChat = chats[0].id;
      }

      setActiveChatKey(currentChat);

      getLatestMessages(
        projectId,
        myUsername,
        mySecret,
        currentChat,
        45,
        (chatId, messages) => {
          const messageData = _.mapKeys(messages, 'created') as MessagesProps;
          setMessages(messageData);
        }
      );
    });
  };

  console.log('activeChat', activeChatKey);
  console.log('chats', chats);
  console.log('messages', messages);

  return (
    <div>
      <ChatEngine
        activeChatKey={activeChatKey}
        chats={chats}
        messages={messages}
        style={{ height: '80vh' }}
      />

      <Socket
        projectId={projectId}
        myUsername={myUsername}
        mySecret={mySecret}
        onConnect={onConnect}
      />
    </div>
  );
};

export default App;
