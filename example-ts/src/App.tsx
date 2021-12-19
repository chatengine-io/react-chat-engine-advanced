import React from 'react';

import { ChatEngine } from 'react-chat-engine-components';

const projectId = '1ed59673-1fd6-46ed-9eb9-56239a6a4f82';
const myUsername = 'Adam_La_Morre';
const mySecret = 'pass1234';

const App: React.FC = () => {
  return (
    <ChatEngine
      isDevelopment
      projectId={projectId}
      myUsername={myUsername}
      mySecret={mySecret}
      onConnect={() => console.log('onConnect')}
      onAuthFail={() => console.log('onAuthFail')}
      onNewChat={() => console.log('onNewChat')}
      onEditChat={() => console.log('onEditChat')}
      onDeleteChat={() => console.log('onDeleteChat')}
      onNewMessage={() => console.log('onNewMessage')}
      onEditMessage={() => console.log('onEditMessage')}
      onDeleteMessage={() => console.log('onDeleteMessage')}
      onChatCardClick={() => console.log('onChatCardClick')}
      onChatFormSubmit={() => console.log('onChatFormSubmit')}
      onChatLoaderShow={() => console.log('onChatLoaderShow')}
      onMessageLoaderShow={() => console.log('onMessageLoaderShow')}
      onMessageLoaderHide={() => console.log('onMessageLoaderHide')}
      onBottomMessageShow={() => console.log('onBottomMessageShow')}
      onBottomMessageHide={() => console.log('onBottomMessageHide')}
      onMessageFormSubmit={() => console.log('onMessageFormSubmit')}
      onInvitePersonClick={() => console.log('onInvitePersonClick')}
      onRemovePersonClick={() => console.log('onRemovePersonClick')}
      onDeleteChatClick={() => console.log('onDeleteChatClick')}
    />
  );
};

export default App;
