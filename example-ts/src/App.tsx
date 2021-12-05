import React from 'react';

import { ChatEngine, Socket } from 'react-chat-engine-components';

const App: React.FC = () => {
  return (
    <div>
      <ChatEngine style={{ height: '80vh' }} />

      <Socket />
    </div>
  );
};

export default App;
