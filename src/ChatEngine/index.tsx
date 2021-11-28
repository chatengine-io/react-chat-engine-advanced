import React from 'react';
import { Props } from './props';
import { styles } from './styles';

import { ChatList } from './ChatList';
import { ChatFeed } from './ChatFeed';
import { ChatSettings } from './ChatSettings';

import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const ChatEngine: React.FC<Props> = (props: Props) => {
  const { chats = {}, activeChatKey = -1, messages = {} } = props;

  const chat = chats[activeChatKey];

  return (
    <Row
      className="ce-chat-engine"
      style={{ ...styles.chatEngineStyle, ...props.chatEngineStyle }}
    >
      <Col
        xs={0}
        sm={3}
        className="ce-chat-list-column"
        style={{ ...styles.chatListColumnStyle, ...props.chatListColumnStyle }}
      >
        <ChatList
          chats={chats}
          activeChatKey={activeChatKey}
          isLoading={props.isChatListLoading}
          hasMoreChats={props.hasMoreChats}
          onChatFormSubmit={props.onChatFormSubmit}
          onChatCardClick={props.onChatCardClick}
          onChatLoaderVisible={props.onChatLoaderVisible}
          renderChatList={props.renderChatList}
          renderChatForm={props.renderChatForm}
          renderChatCard={props.renderChatCard}
        />
      </Col>

      <Col
        xs={12}
        sm={6}
        className="ce-chat-feed-column"
        style={{ ...styles.chatFeedColumnStyle, ...props.chatFeedColumnStyle }}
      >
        <ChatFeed
          chat={chat}
          messages={messages}
          isLoading={props.isChatFeedLoading}
          hasMoreMessages={props.hasMoreMessages}
          onTopMessageShow={props.onTopMessageShow}
          onBottomMessageShow={props.onBottomMessageShow}
          onMessageSend={props.onMessageSend}
          renderChatFeed={props.renderChatFeed}
          renderChatHeader={props.renderChatHeader}
          renderMessageList={props.renderMessageList}
          renderMessageForm={props.renderMessageForm}
        />
      </Col>

      <Col
        xs={0}
        sm={3}
        className="ce-chat-settings-column"
        style={{
          ...styles.chatSettingsColumnStyle,
          ...props.chatSettingsColumnStyle,
        }}
      >
        <ChatSettings
          chat={chat}
          myUsername={props.myUsername}
          isLoading={props.isChatSettingsLoading}
        />
      </Col>
    </Row>
  );
};
