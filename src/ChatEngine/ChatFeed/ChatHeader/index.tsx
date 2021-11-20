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
  mobileOptionStyle = {},
  titleStyle = {},
  subtitleStyle = {},
}) => {
  return (
    <Row className="ce-chat-header" style={{ ...styles.style, ...style }}>
      <Col
        xs={2}
        sm={0}
        className="ce-chat-list-mobile-option"
        style={{
          ...styles.mobileOptionStyle,
          ...{ left: '6px' }, // LHS Specific
          ...mobileOptionStyle,
        }}
      >
        {/* <ChatListDrawer /> */}
      </Col>

      <div
        id={`ce-chat-feed-title-${id}`}
        className="ce-chat-title"
        style={{ ...styles.titleStyle, ...titleStyle }}
      >
        {title}
      </div>

      <div
        className="ce-chat-subtitle"
        style={{ ...styles.subtitleStyle, ...subtitleStyle }}
      >
        {description}
      </div>

      <Col
        xs={2}
        sm={0}
        className="ce-chat-settings-mobile-option"
        style={{
          ...styles.mobileOptionStyle,
          ...{ right: '6px' }, // RHS Specific
          ...mobileOptionStyle,
        }}
      >
        {/* <ChatSettingsDrawer /> */}
      </Col>
    </Row>
  );
};
