import React from 'react';
import { connect } from 'react-redux';

import {
  ChatEngine,
  UserSocket,
  useChatEngineUserHooks,
} from 'react-chat-engine';

const ChatEngineApp = (props) => {
  const {
    socketHooks,
    chatData,
    chatState,
    chatHooks,
  } = useChatEngineUserHooks(
    props.projectID,
    props.accounts.userName,
    props.accounts.userSecret,
    props.development
  );

  return (
    <div>
      <UserSocket
        projectId={props.projectID}
        myUsername={props.accounts.userName}
        mySecret={props.accounts.userSecret}
        isDevelopment={props.development}
        // Socket Hooks
        onConnect={socketHooks.onConnect}
        onAuthFail={socketHooks.onAuthFail}
        onNewChat={socketHooks.onNewChat}
        onEditChat={socketHooks.onEditChat}
        onDeleteChat={socketHooks.onDeleteChat}
        onNewMessage={socketHooks.onNewMessage}
        onEditMessage={socketHooks.onEditMessage}
        onDeleteMessage={socketHooks.onDeleteMessage}
        onIsTyping={socketHooks.onIsTyping}
      />

      <ChatEngine
        timezoneOffset={-7}
        myUsername={props.accounts.myUsername}
        chats={chatData.chats}
        activeChatId={chatData.activeChatId}
        messages={chatData.messages}
        // State
        hasMoreChats={chatState.hasMoreChats}
        hasMoreMessages={chatState.hasMoreMessages}
        // Component Hooks
        onChatFormSubmit={chatHooks.onChatFormSubmit}
        onChatCardClick={chatHooks.onChatCardClick}
        onChatLoaderShow={chatHooks.onChatLoaderShow}
        onMessageLoaderShow={chatHooks.onMessageLoaderShow}
        onMessageLoaderHide={chatHooks.onMessageLoaderHide}
        onBottomMessageShow={chatHooks.onBottomMessageShow}
        onBottomMessageHide={chatHooks.onBottomMessageHide}
        onMessageFormSubmit={chatHooks.onMessageFormSubmit}
        onInvitePersonClick={chatHooks.onInvitePersonClick}
        onRemovePersonClick={chatHooks.onRemovePersonClick}
        onDeleteChatClick={chatHooks.onDeleteChatClick}
        style={{ height: props.height }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(ChatEngineApp);
