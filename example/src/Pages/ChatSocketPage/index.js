import React from 'react';

import {
  ChatSocket,
  ChatFeed,
  ChatList,
  useChatEngineUserHooks,
} from 'react-chat-engine';

import {
  DEVELOPMENT,
  PROJECT_ID,
  CHAT_ID,
  CHAT_ACCESS_KEY,
} from '../../consts';

import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

const HomePage = () => {
  const senderUsername = 'Abel Smith';

  const { onConnect } = useChatEngineUserHooks(
    PROJECT_ID,
    senderUsername,
    CHAT_ACCESS_KEY,
    DEVELOPMENT
  );

  return (
    <Row style={{ height: '100vh', backgroundColor: '#bae7ff' }}>
      <Col xs={0} sm={0} md={4} />

      <Col xs={12} sm={6} md={4} style={{ height: '95vh', marginTop: '2.5vh' }}>
        <ChatSocket
          projectId={PROJECT_ID}
          chatId={CHAT_ID}
          chatAccessKey={CHAT_ACCESS_KEY}
          isDevelopment={DEVELOPMENT}
          onConnect={onConnect}
        />

        <ChatFeed myUsername={senderUsername} messages={[]} isLoading={true} />
      </Col>

      <Col xs={12} sm={6} md={4} style={{ height: '95vh', marginTop: '2.5vh' }}>
        <ChatList chats={[]} isLoading={true} />
      </Col>
    </Row>
  );
};

export default HomePage;
