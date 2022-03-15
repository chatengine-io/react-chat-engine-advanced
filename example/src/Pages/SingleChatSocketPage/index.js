import React from 'react';

import {
  SingleChatSocket,
  ChatFeed,
  ChatList,
  useSingleChatLogic,
} from 'react-chat-engine-advanced';

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

  const state = useSingleChatLogic(
    PROJECT_ID,
    CHAT_ID,
    CHAT_ACCESS_KEY,
    DEVELOPMENT
  );

  return (
    <Row style={{ height: '100vh', backgroundColor: '#bae7ff' }}>
      <Col xs={0} sm={0} md={4} />

      <Col xs={12} sm={6} md={4} style={{ height: '95vh', marginTop: '2.5vh' }}>
        <SingleChatSocket {...state} />
        <ChatFeed username={senderUsername} {...state} />
      </Col>

      <Col xs={12} sm={6} md={4} style={{ height: '95vh', marginTop: '2.5vh' }}>
        <ChatList chats={[]} isLoading={true} />
      </Col>
    </Row>
  );
};

export default HomePage;
