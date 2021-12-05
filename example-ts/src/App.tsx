import React from 'react';

import { ChatEngine, Socket } from 'react-chat-engine-components';

const App: React.FC = () => {
  return (
    <div>
      <ChatEngine style={{ height: '80vh' }} />

      <Socket
        projectId="1ed59673-1fd6-46ed-9eb9-56239a6a4f82"
        myUsername="Adam_La_Morre"
        mySecret="pass1234"
      />
    </div>
  );
};

export default App;
