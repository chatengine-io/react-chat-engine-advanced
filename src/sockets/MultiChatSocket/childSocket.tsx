import React from 'react';

import { Props } from './props';

import { WebSocket } from 'nextjs-websocket';

export const ChildSocket: React.FC<Props> = (props: Props) => {
  const { sessionToken } = props;

  const onMessage = (event: string) => {
    const eventJSON = JSON.parse(event);
    if (eventJSON.action === 'new_chat') {
      props.onNewChat && props.onNewChat(eventJSON.data);
    } else if (
      eventJSON.action === 'edit_chat' ||
      eventJSON.action === 'add_person' ||
      eventJSON.action === 'remove_person'
    ) {
      props.onEditChat && props.onEditChat(eventJSON.data);
    } else if (eventJSON.action === 'delete_chat') {
      props.onDeleteChat && props.onDeleteChat(eventJSON.data);
    } else if (eventJSON.action === 'new_message') {
      const { id, message } = eventJSON.data;
      props.onNewMessage && props.onNewMessage(id, message);
    } else if (eventJSON.action === 'edit_message') {
      const { id, message } = eventJSON.data;
      props.onEditMessage && props.onEditMessage(id, message);
    } else if (eventJSON.action === 'delete_message') {
      const { id, message } = eventJSON.data;
      props.onDeleteMessage && props.onDeleteMessage(id, message);
    } else if (eventJSON.action === 'is_typing') {
      const { id, person } = eventJSON.data;
      props.onIsTyping && props.onIsTyping(id, person);
    }
  };

  if (!sessionToken) return <div />;

  const wsUrl = props.wsUrl ? props.wsUrl : 'wss://api.chatengine.io';

  return (
    <WebSocket
      url={`${wsUrl}/person_v4/?session_token=${sessionToken}`}
      reconnect={true}
      reconnectIntervalInMilliSeconds={3000}
      onOpen={props.onConnect}
      onError={props.onError}
      onMessage={onMessage}
      onClose={() => {
        props.onClose && props.onClose();
        props.onRefresh && props.onRefresh();
      }}
    />
  );
};
