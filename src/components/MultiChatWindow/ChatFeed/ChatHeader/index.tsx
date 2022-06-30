import React from 'react';

import { ChatHeaderProps } from './props';
import { styles } from './styles';

import { Row, Col, setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatHeader: React.FC<ChatHeaderProps> = (
  props: ChatHeaderProps
) => {
  const { id = '', title = '', description = '' } = props;

  if (props.renderChatHeader) {
    return <>{props.renderChatHeader(props)}</>;
  }

  return (
    <Row className="ce-chat-header" style={{ ...styles.style, ...props.style }}>
      <Col
        xs={2}
        sm={0}
        className="ce-chat-header-mobile-option"
        style={{
          ...styles.mobileOptionStyle,
          ...{ left: '6px' },
          ...props.mobileOptionStyle,
        }}
      ></Col>

      <div
        id={`ce-chat-feed-title-${id}`}
        className="ce-chat-header-title"
        style={{
          ...styles.titleStyle,
          ...props.titleStyle,
        }}
      >
        {title}
      </div>

      <div
        className="ce-chat-header-subtitle"
        style={{
          ...styles.subtitleStyle,
          ...props.subtitleStyle,
        }}
      >
        {description}
      </div>

      <Col
        xs={2}
        sm={0}
        className="ce-chat-header-mobile-option"
        style={{
          ...styles.mobileOptionStyle,
          ...{ right: '6px' },
          ...props.mobileOptionStyle,
        }}
      ></Col>
    </Row>
  );
};
