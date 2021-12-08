import React, { useState } from 'react';

import {
  ChatEngine,
  ChatProps,
  MessagesProps,
  Socket,
  // Actions
  getChatsBefore,
  newChat,
  newMessage,
  getMessages,
  getChatsAndMessages,
  // Utilities
  getDateTime,
} from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const chatCountIterator = 20;
const messageCountIterator = 50;

const App: React.FC = () => {
  // Data
  const [activeChatKey, setActiveChatKey] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatProps[] | undefined>();
  const [messages, setMessages] = useState<MessagesProps | undefined>();
  // State
  const [chatCount, setChatCount] = useState<number>(chatCountIterator);
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);

  const onGetChats = (chatCount: number, chats: ChatProps[] = []) => {
    const sortedChats = chats.sort((a: ChatProps, b: ChatProps) => {
      const aDate =
        a.last_message && a.last_message.created
          ? getDateTime(a.last_message.created, 0)
          : getDateTime(a.created, 0);
      const bDate =
        b.last_message && b.last_message.created
          ? getDateTime(b.last_message.created, 0)
          : getDateTime(b.created, 0);
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });
    setChats(sortedChats);
    setHasMoreChats(Object.keys(chats).length === chatCount);
    setChatCount(Object.keys(chats).length);
  };

  const onConnect = () => {
    getChatsAndMessages(
      projectId,
      myUsername,
      mySecret,
      undefined,
      chatCount,
      messageCountIterator,
      (chats: ChatProps[]) => onGetChats(chatCount, chats),
      (activeChatKey: number) => setActiveChatKey(activeChatKey),
      (messages: MessagesProps) => setMessages(messages)
    );
  };

  const onMessageSend = (value: string, attachments: File[]) => {
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

  const onChatCardClick = (chatId: number) => {
    setActiveChatKey(chatId);
    getMessages(
      projectId,
      myUsername,
      mySecret,
      chatId,
      messageCountIterator,
      (chatId, messages) => {
        void chatId;
        setMessages(messages);
      }
    );
  };

  const onChatFormSubmit = (title: string) => {
    newChat(projectId, myUsername, mySecret, title, (chat) => {
      const newChats = [chat].concat(chats ? chats : []);
      setChats(newChats);
      setChatCount(newChats.length);
      setActiveChatKey(chat.id);
    });
  };

  const onChatLoaderVisible = () => {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);
    const newChatCount = chatCount + chatCountIterator;

    getChatsBefore(
      projectId,
      myUsername,
      mySecret,
      now,
      newChatCount,
      (chats: ChatProps[]) => onGetChats(newChatCount, chats)
    );
  };

  return (
    <div>
      <ChatEngine
        chats={chats}
        activeChatKey={activeChatKey}
        messages={messages}
        myUsername={myUsername}
        // State
        hasMoreChats={hasMoreChats}
        // Hooks
        onChatFormSubmit={onChatFormSubmit}
        onChatCardClick={onChatCardClick}
        onChatLoaderVisible={onChatLoaderVisible}
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
