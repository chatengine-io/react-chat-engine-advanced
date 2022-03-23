<p align="center" >
    <p align="center" >
        <a href="https://chatengine.io/">
            <img    
                alt="react-chat-engine" 
                style='max-height: 333px; max-width: 100%;'
                src="https://chat-engine-assets.s3.amazonaws.com/react-chat-engine.gif" 
            />
        </a>
    </p>
</p>

## Chat Engine

Chat Engine is a devevloper friendly Chat UI Kit.

Setup a free plan at [chatengine.io](https://chatengine.io)

## Features

- Typescript (since 2.0.0)
- Sign Up / Authentication
- Setup chats
- Send messages
- Send files and photos
- Subscribe to Chats via Sockets
- Invite / Remove chat members
- Endless Chat scrolling
- Endless Message scrolling

## Installation

- Using [npm](https://www.npmjs.com/#getting-started): `npm install react-chat-engine --save`
- Using [Yarn](https://yarnpkg.com/): `yarn add react-chat-engine`

## Quick Start

Add serverless chat to your React app in 3 minutes.

1. Register then create a **project** and **user** at [chatengine.io](https://chatengine.io)

2. Collect the **Project ID** / **username** / **User Secret**

3. Install `yarn add react-chat-engine`

4. Import `MultiChatWindow`, `MultiChatSocket`, and `useMultiChatLogic`

5. Declare `const props = useMultiChatLogic(projectId, username, secret);` and pass the returning `props` object into `MultiChatWindow` and `MultiChatSocket`.

6. Voila! You're done

Example implementation ⬇️

```jsx
import React from 'react';

import {
  ChatEngine,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

export function App() {
  const chatProps = useMultiChatLogic(
    'b75e5bd5-cd84-404c-b820-06feff8c98c0',
    'john_smith',
    'secret_1234'
  );
  return (
    <>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </>
  );
}
```

## Props

- **`projectId`** _(String REQUIRED)_ - Public API key for your [chatengine.io](https://chatengine.io) project
- **`username`** _(String REQUIRED)_ - username of a person in this project
- **`secret`** _(String REQUIRED)_ - Set a secret for this person and use it to authenticate.
- **`onConnect`** (Function) - Callback when the connection/authentication is complete
- **`onFailAuth`** (Function) - Callback when the connection/authentication fails
- **`onGetChats`** _(Function)_ Callback when the person fetches their chats array
- **`onNewChat`** _(Function)_ - Callback when the person creates a new chat
- **`onEditChat`** _(Function)_ - Callback when the person edits a chat title
- **`onDeleteChat`** _(Function)_ - Callback when the person deletes one of their chats (must the chat's admin)
- **`onAddPerson`** _(Function)_ - Callback when a person is added to a chat
- **`onRemovePerson`** _(Function)_ - Callback when a person is removed/deleted from a chat
- **`onGetMessages`** _(Function)_ - Callback when the person gets a chat's messages
- **`onNewMessage`** _(Function)_ - Callback when a person posts a new message in one of the chats
- **`onEditMessage`** _(Function)_ - Callback when a person edits a new message in one of the chats
- **`onDeleteMessage`** _(Function)_ - Callback when a person deletes a new message in one of the chats
- **`hideUI`** _(Boolean)_ - Hides all UI components for a custom implementation (Warning: Advanced)
