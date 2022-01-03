import React from 'react';

import {
  UserSocket,
  ChatFeed,
  useUserHooks,
  getChatsBefore,
} from 'react-chat-engine';

import {
  DEVELOPMENT,
  PROJECT_ID,
  USER_NAME,
  USER_SECRET,
  CHAT_ID,
} from '../../consts';

import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

const UserSocketPage = () => {
  const chatProps = useUserHooks(
    PROJECT_ID,
    USER_NAME,
    USER_SECRET,
    DEVELOPMENT
  );

  const chat = chatProps.chats.find((chat) => chat.id === CHAT_ID);

  const onConnect = () => {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);

    const headers = {
      'Public-Key': PROJECT_ID,
      'User-Name': USER_NAME,
      'User-Secret': USER_SECRET,
    };

    getChatsBefore('http://127.0.0.1:8000', headers, now, 25, (chats) => {
      chatProps.onGetChats(chats);
      chatProps.onChatCardClick(CHAT_ID);
    });
  };

  return (
    <Row>
      <Col xs={12} sm={6} md={4} style={{ height: '600px' }}>
        <UserSocket
          projectId={chatProps.projectId}
          myUsername={chatProps.myUsername}
          mySecret={chatProps.mySecret}
          isDevelopment={chatProps.isDevelopment}
          onConnect={onConnect}
          onNewChat={chatProps.onNewChat}
          onEditChat={chatProps.onEditChat}
          onDeleteChat={chatProps.onDeleteChat}
          onNewMessage={chatProps.onNewMessage}
          onEditMessage={chatProps.onEditMessage}
          onDeleteMessage={chatProps.onDeleteMessage}
        />

        <ChatFeed
          chat={chat}
          messages={chatProps.messages}
          myUsername={chatProps.myUsername}
          hasMoreMessages={chatProps.hasMoreMessages}
          onMessageLoaderShow={chatProps.onMessageLoaderShow}
          onMessageLoaderHide={chatProps.onMessageLoaderHide}
          onBottomMessageHide={chatProps.onBottomMessageHide}
          onBottomMessageShow={chatProps.onBottomMessageShow}
          onMessageFormSubmit={chatProps.onMessageFormSubmit}
        />
      </Col>
    </Row>
  );
};

export default UserSocketPage;
