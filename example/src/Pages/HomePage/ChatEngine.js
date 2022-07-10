import React from 'react';
import { connect } from 'react-redux';

import { PROJECT_ID, HTTP_URL, WS_URL } from '../../consts';

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const MultiChatWindowApp = (props) => {
  const chatProps = useMultiChatLogic(
    PROJECT_ID,
    props.accounts.userName,
    props.accounts.userSecret,
    HTTP_URL
  );

  return (
    <div>
      <MultiChatSocket
        projectId={chatProps.projectId}
        username={chatProps.username}
        secret={chatProps.secret}
        httpUrl={chatProps.httpUrl}
        wsUrl={WS_URL}
        // Socket Hooks
        onConnect={chatProps.onConnect}
        onAuthFail={chatProps.onAuthFail}
        onNewChat={chatProps.onNewChat}
        onEditChat={chatProps.onEditChat}
        onDeleteChat={chatProps.onDeleteChat}
        onNewMessage={chatProps.onNewMessage}
        onEditMessage={chatProps.onEditMessage}
        onDeleteMessage={chatProps.onDeleteMessage}
        onIsTyping={chatProps.onIsTyping}
      />

      <MultiChatWindow
        timezoneOffset={-7}
        chats={chatProps.chats}
        messages={chatProps.messages}
        // State
        isChatListLoading={chatProps.isChatListLoading}
        isChatFeedLoading={chatProps.isChatFeedLoading}
        isChatSettingsLoading={chatProps.isChatSettingsLoading}
        isMobileChatListOpen={chatProps.isMobileChatListOpen}
        isMobileChatSettingsOpen={chatProps.isMobileChatSettingsOpen}
        // chatProps
        activeChatId={chatProps.activeChatId}
        username={chatProps.username}
        hasMoreChats={chatProps.hasMoreChats}
        hasMoreMessages={chatProps.hasMoreMessages}
        // Component Hooks
        onChatFormSubmit={chatProps.onChatFormSubmit}
        onChatCardClick={chatProps.onChatCardClick}
        onChatLoaderShow={chatProps.onChatLoaderShow}
        onMessageLoaderShow={chatProps.onMessageLoaderShow}
        onMessageLoaderHide={chatProps.onMessageLoaderHide}
        onBottomMessageShow={chatProps.onBottomMessageShow}
        onBottomMessageHide={chatProps.onBottomMessageHide}
        onMessageFormSubmit={chatProps.onMessageFormSubmit}
        onInvitePersonClick={chatProps.onInvitePersonClick}
        onRemovePersonClick={chatProps.onRemovePersonClick}
        onDeleteChatClick={chatProps.onDeleteChatClick}
        onMobileChatListClick={chatProps.onMobileChatListClick}
        onMobileChatSettingsClick={chatProps.onMobileChatSettingsClick}
        onCloseMobileChatSettingsClick={
          chatProps.onCloseMobileChatSettingsClick
        }
        style={{ height: 'calc(100vh - 20px)' }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(MultiChatWindowApp);
