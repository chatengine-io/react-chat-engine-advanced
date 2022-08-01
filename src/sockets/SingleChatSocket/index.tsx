import React, { useState, useEffect, useRef } from 'react';

import { Props } from './props';

import { ChildSocket } from './childSocket';

export const SingleChatSocket: React.FC<Props> = (props: Props) => {
  const didMountRef = useRef(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }
  }, []);

  async function reRender() {
    setIsHidden(true);
    setTimeout(() => setIsHidden(false), 100);
  }

  if (isHidden) return <div />;

  return (
    <ChildSocket
      projectId={props.projectId}
      chatId={props.chatId}
      chatAccessKey={props.chatAccessKey}
      wsUrl={props.wsUrl}
      onRefresh={reRender}
      onConnect={props.onConnect}
      onAuthFail={props.onAuthFail}
      onError={props.onError}
      onClose={props.onClose}
      onEditChat={props.onEditChat}
      onDeleteChat={props.onDeleteChat}
      onNewMessage={props.onNewMessage}
      onEditMessage={props.onEditMessage}
      onDeleteMessage={props.onDeleteMessage}
      onIsTyping={props.onIsTyping}
    />
  );
};
