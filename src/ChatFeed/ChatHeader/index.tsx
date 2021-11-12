import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatHeader: React.FC<Props> = ({
  id = '',
  title = '',
  description = '',
  style = {},
}) => {
  return (
    <Row
      className="ce-chat-title"
      style={{ ...styles.titleSection, ...style.titleSection }}
    >
      <Col
        xs={2}
        sm={0}
        style={{
          ...styles.mobileOptiom,
          ...{ left: '6px' },
          ...style.mobileOptiom,
        }}
        className="ce-chat-list-mobile-option"
      >
        {/* <ChatListDrawer /> */}
      </Col>

      <Col
        xs={8}
        sm={12}
        style={{ ...styles.titleContainer, ...style.titleContainer }}
        className="ce-chat-title-container"
      >
        <div
          style={{ ...styles.titleText, ...style.titleText }}
          className="ce-chat-title-text"
          id={`ce-chat-feed-title-${id}`}
        >
          {title}
        </div>

        <div
          style={{ ...styles.subtitleText, ...style.subtitleText }}
          className="ce-chat-subtitle-text"
        >
          {description}
        </div>
      </Col>

      <Col
        xs={2}
        sm={0}
        style={{
          ...styles.mobileOptiom,
          ...{ right: '6px' },
          ...style.mobileOptiom,
        }}
        className="ce-chat-settings-mobile-option"
      >
        {/* <ChatSettingsDrawer /> */}
      </Col>
    </Row>
  );
};
