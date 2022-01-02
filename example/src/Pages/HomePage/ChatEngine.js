import React from 'react';
import { connect } from 'react-redux';

import { ChatEngine, UserSocket, useUserHooks } from 'react-chat-engine';

const ChatEngineApp = (props) => {
  const { socketHooks, chatData, chatState, componentHooks } = useUserHooks(
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
        chats={chatData.chats}
        messages={chatData.messages}
        // State
        activeChatId={chatData.activeChatId}
        myUsername={props.accounts.userName}
        hasMoreChats={chatState.hasMoreChats}
        hasMoreMessages={chatState.hasMoreMessages}
        // Component Hooks
        onChatFormSubmit={componentHooks.onChatFormSubmit}
        onChatCardClick={componentHooks.onChatCardClick}
        onChatLoaderShow={componentHooks.onChatLoaderShow}
        onMessageLoaderShow={componentHooks.onMessageLoaderShow}
        onMessageLoaderHide={componentHooks.onMessageLoaderHide}
        onBottomMessageShow={componentHooks.onBottomMessageShow}
        onBottomMessageHide={componentHooks.onBottomMessageHide}
        onMessageFormSubmit={componentHooks.onMessageFormSubmit}
        onInvitePersonClick={componentHooks.onInvitePersonClick}
        onRemovePersonClick={componentHooks.onRemovePersonClick}
        onDeleteChatClick={componentHooks.onDeleteChatClick}
        style={{ height: props.height }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(ChatEngineApp);
