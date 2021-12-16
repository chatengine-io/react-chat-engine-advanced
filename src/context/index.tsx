import React, { createContext, ReactNode } from 'react';
import { useChatEngine } from '../hooks';

interface Props {
  projectId: string;
  myUsername: string;
  mySecret: string;
  children?: ReactNode;
}

export const ChatEngineContext = createContext<Props | null>(null);

export const ChatEngineWrapper = (props: Props) => {
  const { projectId, myUsername, mySecret } = props;
  const state = useChatEngine(projectId, myUsername, mySecret);

  return (
    <ChatEngineContext.Provider value={state}>
      {props.children}
    </ChatEngineContext.Provider>
  );
};
