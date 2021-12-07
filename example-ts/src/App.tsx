import React, { useState } from 'react';

import {
  ChatEngine,
  ChatsProps,
  MessagesProps,
  Socket,
  // Actions
  newMessage,
  getChatsAndMessages,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const chatCount = 20;
const messageCount = 50;

const App: React.FC = () => {
  const [activeChatKey, setActiveChatKey] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatsProps | undefined>();
  const [messages, setMessages] = useState<MessagesProps | undefined>();

  const onConnect = () => {
    getChatsAndMessages(
      projectId,
      myUsername,
      mySecret,
      undefined,
      chatCount,
      messageCount,
      (chats: ChatsProps) => setChats(chats),
      (activeChatKey: number) => setActiveChatKey(activeChatKey),
      (messages: MessagesProps) => setMessages(messages)
    );
  };

  const onMessageSend = (value: string, attachments: File[]) => {
    console.log(value, attachments);
    newMessage(
      projectId,
      myUsername,
      mySecret,
      activeChatKey,
      value,
      attachments,
      () => console.log('sent')
    );
  };

  return (
    <div>
      <ChatEngine
        chats={chats}
        activeChatKey={activeChatKey}
        messages={messages}
        onMessageSend={onMessageSend}
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
