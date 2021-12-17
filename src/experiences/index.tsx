import React from 'react';

import { useChatEngine } from '../hooks';
import { ChatEngineWindow } from '../components';
import { ChatEngineProps, sanitizeProps } from '../interfaces';
import { Socket } from '../sockets';

const defaultStyle = {
  height: '100vh',
};

export const ChatEngine: React.FC<ChatEngineProps> = (
  props: ChatEngineProps
) => {
  const { projectId, myUsername, mySecret } = sanitizeProps(props);
  const state = useChatEngine(projectId, myUsername, mySecret);

  return (
    <div>
      <Socket {...state} />
      <ChatEngineWindow
        {...state}
        {...props}
        style={{ ...defaultStyle, ...props.style }}
      />
    </div>
  );
};
