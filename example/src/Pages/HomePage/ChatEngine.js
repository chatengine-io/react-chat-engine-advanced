import React from 'react';
import { connect } from 'react-redux';

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const MultiChatWindowApp = (props) => {
  const chatProps = useMultiChatLogic(
    props.projectID,
    props.accounts.userName,
    props.accounts.userSecret,
    props.development
  );

  return (
    <div>
      <MultiChatSocket
        projectId={chatProps.projectId}
        username={chatProps.username}
        secret={chatProps.secret}
        isDevelopment={chatProps.isDevelopment}
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
        style={{ height: props.height }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(MultiChatWindowApp);
