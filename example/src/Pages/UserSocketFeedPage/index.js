import React from 'react';

import {
  UserSocket,
  ChatFeed,
  useChatEngine,
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
  const state = useChatEngine(PROJECT_ID, USER_NAME, USER_SECRET, DEVELOPMENT);

  const chat = state.chats.find((chat) => chat.id === CHAT_ID);

  const onConnect = () => {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);

    getChatsBefore(
      'http://127.0.0.1:8000',
      PROJECT_ID,
      USER_NAME,
      USER_SECRET,
      now,
      25,
      (chats) => {
        state.onGetChats(chats);
        state.onChatCardClick(CHAT_ID);
      }
    );
  };

  return (
    <Row>
      <Col xs={12} sm={6} md={4} style={{ height: '600px' }}>
        <UserSocket
          projectId={PROJECT_ID}
          myUsername={USER_NAME}
          mySecret={USER_SECRET}
          isDevelopment={DEVELOPMENT}
          onConnect={onConnect}
          onNewChat={state.onNewChat}
          onEditChat={state.onEditChat}
          onDeleteChat={state.onDeleteChat}
          onNewMessage={state.onNewMessage}
          onEditMessage={state.onEditMessage}
          onDeleteMessage={state.onDeleteMessage}
        />

        <ChatFeed
          // Chat Data
          chat={chat}
          messages={state.messages}
          myUsername={state.myUsername}
          // State
          hasMoreMessages={state.hasMoreMessages}
          // Component Hooks
          onMessageLoaderShow={state.onMessageLoaderShow}
          onMessageLoaderHide={state.onMessageLoaderHide}
          onBottomMessageHide={state.onBottomMessageHide}
          onBottomMessageShow={state.onBottomMessageShow}
          onMessageFormSubmit={state.onMessageFormSubmit}
        />
      </Col>
    </Row>
  );
};

export default UserSocketPage;
