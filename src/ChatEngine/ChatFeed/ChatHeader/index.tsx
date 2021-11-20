import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatHeader: React.FC<Props> = ({
  id = '',
  title = '',
  description = '',
  chatHeaderStyle = {},
  chatHeaderTitleStyle = {},
  chatHeaderSubtitleStyle = {},
  chatHeaderMobileOptionStyle = {},
}) => {
  return (
    <Row
      className="ce-chat-header"
      style={{ ...styles.chatHeaderStyle, ...chatHeaderStyle }}
    >
      <Col
        xs={2}
        sm={0}
        className="ce-chat-header-mobile-option"
        style={{
          ...styles.chatHeaderMobileOptionStyle,
          ...{ left: '6px' }, // LHS Specific
          ...chatHeaderMobileOptionStyle,
        }}
      >
        {/* <ChatListDrawer /> */}
      </Col>

      <div
        id={`ce-chat-feed-title-${id}`}
        className="ce-chat-header-title"
        style={{
          ...styles.chatHeaderTitleStyle,
          ...chatHeaderTitleStyle,
        }}
      >
        {title}
      </div>

      <div
        className="ce-chat-header-subtitle"
        style={{
          ...styles.chatHeaderSubtitleStyle,
          ...chatHeaderSubtitleStyle,
        }}
      >
        {description}
      </div>

      <Col
        xs={2}
        sm={0}
        className="ce-chat-header-mobile-option"
        style={{
          ...styles.chatHeaderMobileOptionStyle,
          ...{ right: '6px' }, // RHS Specific
          ...chatHeaderMobileOptionStyle,
        }}
      >
        {/* <ChatSettingsDrawer /> */}
      </Col>
    </Row>
  );
};
