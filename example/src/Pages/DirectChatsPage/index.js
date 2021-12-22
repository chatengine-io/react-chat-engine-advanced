import React, { useState } from 'react';

import {
  Socket,
  ChatEngineWindow,
  getOrCreateChat,
  useChatEngine,
} from 'react-chat-engine';

import { DEVELOPMENT, PROJECT_ID, USER_NAME, USER_SECRET } from '../../consts';

const DirectChatPage = () => {
  const [username, setUsername] = useState('');
  const state = useChatEngine(PROJECT_ID, USER_NAME, USER_SECRET, DEVELOPMENT);

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
      <Socket
        projectId={PROJECT_ID}
        myUsername={USER_NAME}
        mySecret={USER_SECRET}
        isDevelopment={DEVELOPMENT}
        {...state}
      />

      <ChatEngineWindow
        style={{ height: '100vh' }}
        myUsername={USER_NAME}
        renderChatForm={() => renderChatForm()}
        {...state}
      />
    </div>
  );
};

export default DirectChatPage;
