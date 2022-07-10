import React, { useEffect, useState } from 'react';

import { MultiChatWindowProps } from './props';
import { styles } from './styles';

import { ChatList } from './ChatList';
import { ChatFeed } from './ChatFeed';
import { ChatSettings } from './ChatSettings';
import { ChatAvatars } from './ChatSettings/ChatAvatars';
import { ChatAvatarsProps } from './ChatSettings/ChatAvatars/props';
import { Button } from '../Components/Button';

import {
  UnorderedListOutlined,
  SettingOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import { Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl', gutterWidth: 0 });

export const MultiChatWindow: React.FC<MultiChatWindowProps> = (
  props: MultiChatWindowProps
) => {
  const { chats = [], activeChatId = -1, messages = [] } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 575);
  const chat = chats.find((chat) => chat.id === activeChatId);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 575);
    }
    window.addEventListener('resize', handleResize);
  });

  const renderChatList = () => {
    return (
      <ChatList
        chats={chats}
        activeChatId={activeChatId}
        username={props.username}
        timezoneOffset={props.timezoneOffset}
        isLoading={props.isChatListLoading}
        hasMoreChats={props.hasMoreChats}
        onChatFormSubmit={props.onChatFormSubmit}
        onChatCardClick={props.onChatCardClick}
        onChatLoaderShow={props.onChatLoaderShow}
        renderChatList={props.renderChatList}
        renderChatForm={props.renderChatForm}
        renderChatCard={props.renderChatCard}
        style={{
          position: isMobile ? 'absolute' : 'inherit',
          zIndex: isMobile ? 1 : 'inherit',
        }}
      />
    );
  };

  const renderChatSettings = () => {
    return (
      <ChatSettings
        chat={chat}
        username={props.username}
        peopleToInvite={props.peopleToInvite}
        isLoading={props.isChatSettingsLoading}
        onInvitePersonClick={props.onInvitePersonClick}
        onRemovePersonClick={props.onRemovePersonClick}
        onDeleteChatClick={props.onDeleteChatClick}
        renderChatSettings={props.renderChatSettings}
        renderChatAvatars={(chatAvatarsProps) =>
          ((
            <>
              <ChatAvatars
                {...chatAvatarsProps}
                renderChatAvatars={props.renderChatAvatars}
              />
              {isMobile && (
                <Button
                  onClick={props.onCloseMobileChatSettingsClick}
                  style={{ position: 'absolute', top: '12px', right: '12px' }}
                >
                  <CloseOutlined />
                </Button>
              )}
            </>
          ) as unknown) as React.FC<ChatAvatarsProps>
        }
        renderPeopleSettings={props.renderPeopleSettings}
        renderPhotosSettings={props.renderPhotosSettings}
        renderOptionsSettings={props.renderOptionsSettings}
        style={{
          position: isMobile ? 'absolute' : 'inherit',
          zIndex: isMobile ? 1 : 'inherit',
        }}
      />
    );
  };

  return (
    <Row className="ce-chat-engine" style={{ ...styles.style, ...props.style }}>
      <Col
        xs={0}
        sm={3}
        className="ce-chat-list-column"
        style={{ ...styles.chatListColumnStyle, ...props.chatListColumnStyle }}
      >
        {renderChatList()}
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
          username={props.username}
          timezoneOffset={props.timezoneOffset}
          isLoading={props.isChatFeedLoading}
          hasMoreMessages={props.hasMoreMessages}
          onMessageLoaderShow={props.onMessageLoaderShow}
          onMessageLoaderHide={props.onMessageLoaderHide}
          onBottomMessageShow={props.onBottomMessageShow}
          onBottomMessageHide={props.onBottomMessageHide}
          onMessageFormSubmit={props.onMessageFormSubmit}
          renderChatFeed={props.renderChatFeed}
          renderChatHeader={props.renderChatHeader}
          renderMessageList={props.renderMessageList}
          renderMessage={props.renderMessage}
          renderWelcomeGif={props.renderWelcomeGif}
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
        {renderChatSettings()}
      </Col>

      <Button
        onClick={props.onMobileChatListClick}
        className="ce-mobile-chat-list-button"
        style={{
          ...styles.chatListMobileButtonStyle,
          ...{ display: isMobile ? 'inherit' : 'none' },
          ...props.chatListMobileButtonStyle,
        }}
      >
        <UnorderedListOutlined />
      </Button>

      {isMobile && props.isMobileChatListOpen && renderChatList()}

      <Button
        onClick={props.onMobileChatSettingsClick}
        className="ce-mobile-chat-settings-button"
        style={{
          ...styles.chatSettingsMobileButtonStyle,
          ...{ display: isMobile ? 'inherit' : 'none' },
          ...props.chatSettingsMobileButtonStyle,
        }}
      >
        <SettingOutlined />
      </Button>

      {isMobile && props.isMobileChatSettingsOpen && renderChatSettings()}
    </Row>
  );
};
