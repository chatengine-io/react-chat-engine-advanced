import React from 'react';
import { Props } from './props';
import { styles } from './styles';

import { ChatList } from './ChatList';
import { ChatFeed } from './ChatFeed';
import { ChatSettings } from './ChatSettings';

import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatEngine: React.FC<Props> = ({
  chats,
  chat,
  messages,
  myUsername,
  chatEngineStyle = {},
  chatListColumnStyle = {},
  chatFeedColumnStyle = {},
  chatSettingsColumnStyle = {},
}: Props) => {
  return (
    <Row
      className="ce-chat-engine"
      style={{ ...styles.chatEngineStyle, ...chatEngineStyle }}
    >
      <Col
        xs={0}
        sm={3}
        className="ce-chat-list-column"
        style={{ ...styles.chatListColumnStyle, ...chatListColumnStyle }}
      >
        <ChatList chats={chats} />
      </Col>

      <Col
        xs={12}
        sm={6}
        className="ce-chat-feed-column"
        style={{ ...styles.chatFeedColumnStyle, ...chatFeedColumnStyle }}
      >
        <ChatFeed chat={chat} messages={messages} />
      </Col>

      <Col
        xs={0}
        sm={3}
        className="ce-chat-settings-column"
        style={{
          ...styles.chatSettingsColumnStyle,
          ...chatSettingsColumnStyle,
        }}
      >
        <ChatSettings chat={chat} myUsername={myUsername} />
      </Col>
    </Row>
  );
};
