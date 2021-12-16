import React from 'react';

import { useChatEngine } from '../hooks';
import { ChatEngineWindow } from '../components';
import { Props as ChatEngineProps } from '../components/ChatEngine/props';
import { Socket } from '../sockets';

interface Props extends ChatEngineProps {
  projectId: string;
  myUsername: string;
  mySecret: string;
}

const defaultStyle = {
  height: '100vh',
};

export const ChatEngine: React.FC<Props> = (props: Props) => {
  const { projectId, myUsername, mySecret } = props;
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
