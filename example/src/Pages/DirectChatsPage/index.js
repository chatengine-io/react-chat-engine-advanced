import React, { useState } from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  getOrCreateChat,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

import { PROJECT_ID, USER_NAME, USER_SECRET, HTTP_URL } from '../../consts';

const DirectChatPage = () => {
  const [username, setUsername] = useState('');
  const state = useMultiChatLogic(PROJECT_ID, USER_NAME, USER_SECRET, HTTP_URL);

  function createDirectChat(creds) {
    const headers = {
      'Public-Key': PROJECT_ID,
      'User-Name': USER_NAME,
      'User-Secret': USER_SECRET,
    };

    getOrCreateChat(
      'http://127.0.0.1:8000',
      headers,
      { is_direct_chat: true, usernames: [username] },
      (chat) => {
        setUsername('');
        state.onChatCardClick(chat.id);
      }
    );
  }

  function renderChatForm() {
    return (
      <div>
        <input
          placeholder="Username"
          id="new-dc-user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button id="new-dc-user-btn" onClick={() => createDirectChat({})}>
          Create
        </button>
      </div>
    );
  }

  return (
    <div>
      <MultiChatSocket
        projectId={state.projectId}
        username={state.username}
        secret={state.secret}
        // Todo: not right...
        wsUrl={state.isDevelopment && 'ws://127.0.0.1:8000'}
        // Socket Hooks
        onConnect={state.onConnect}
        onAuthFail={state.onAuthFail}
        onNewChat={state.onNewChat}
        onEditChat={state.onEditChat}
        onDeleteChat={state.onDeleteChat}
        onNewMessage={state.onNewMessage}
        onEditMessage={state.onEditMessage}
        onDeleteMessage={state.onDeleteMessage}
        onIsTyping={state.onIsTyping}
      />

      <MultiChatWindow
        // Chat Data
        username={state.username}
        chats={state.chats}
        activeChatId={state.activeChatId}
        messages={state.messages}
        // Component Hooks
        onChatFormSubmit={state.onChatFormSubmit}
        onChatCardClick={state.onChatCardClick}
        onChatLoaderShow={state.onChatLoaderShow}
        onMessageLoaderShow={state.onMessageLoaderShow}
        onMessageLoaderHide={state.onMessageLoaderHide}
        onBottomMessageShow={state.onBottomMessageShow}
        onBottomMessageHide={state.onBottomMessageHide}
        onMessageFormSubmit={state.onMessageFormSubmit}
        onInvitePersonClick={state.onInvitePersonClick}
        onRemovePersonClick={state.onRemovePersonClick}
        onDeleteChatClick={state.onDeleteChatClick}
        // Render Functions
        renderChatForm={() => renderChatForm()}
        // Style
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default DirectChatPage;
