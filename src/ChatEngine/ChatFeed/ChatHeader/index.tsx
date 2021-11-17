import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatHeader: React.FC<Props> = ({
  id = '',
  title = '',
  description = '',
  customStyle = {},
}) => {
  return (
    <Row
      className="ce-chat-title"
      style={{ ...styles.chatHeader, ...customStyle.chatHeader }}
    >
      <Col
        xs={2}
        sm={0}
        style={{
          ...styles.mobileOption,
          ...{ left: '6px' }, // LHS Specific
          ...customStyle.mobileOption,
        }}
        className="ce-chat-list-mobile-option"
      >
        {/* <ChatListDrawer /> */}
      </Col>

      <Col
        xs={8}
        sm={12}
        style={{ ...styles.titleContainer, ...customStyle.titleContainer }}
        className="ce-chat-title-container"
      >
        <div
          style={{ ...styles.titleText, ...customStyle.titleText }}
          className="ce-chat-title-text"
          id={`ce-chat-feed-title-${id}`}
        >
          {title}
        </div>

        <div
          style={{ ...styles.subtitleText, ...customStyle.subtitleText }}
          className="ce-chat-subtitle-text"
        >
          {description}
        </div>
      </Col>

      <Col
        xs={2}
        sm={0}
        style={{
          ...styles.mobileOption,
          ...{ right: '6px' }, // RHS Specific
          ...customStyle.mobileOption,
        }}
        className="ce-chat-settings-mobile-option"
      >
        {/* <ChatSettingsDrawer /> */}
      </Col>
    </Row>
  );
};
