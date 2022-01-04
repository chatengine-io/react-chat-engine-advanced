import React from 'react';
import { connect } from 'react-redux';

import { ChatWindow, MyChatsSocket, useUserHooks } from 'react-chat-engine';

const ChatWindowApp = (props) => {
  const chatProps = useUserHooks(
    props.projectID,
    props.accounts.userName,
    props.accounts.userSecret,
    props.development
  );

  return (
    <div>
      <MyChatsSocket
        projectId={chatProps.projectId}
        myUsername={chatProps.myUsername}
        mySecret={chatProps.mySecret}
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

      <ChatWindow
        timezoneOffset={-7}
        chats={chatProps.chats}
        messages={chatProps.messages}
        // chatProps
        activeChatId={chatProps.activeChatId}
        myUsername={chatProps.userName}
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

export default connect(mapStateToProps, {})(ChatWindowApp);
