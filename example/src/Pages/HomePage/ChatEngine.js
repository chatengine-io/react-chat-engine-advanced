import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import { ChatEngine, ChatEngineContext } from 'react-chat-engine';

const ChatEngineApp = (props) => {
  const { chats, messages, setActiveChat } = useContext(ChatEngineContext);
  const [hasSetLink, setLink] = useState(false);

  useEffect(() => {
    const { id } = props;
    if (id && chats && chats[id] && !_.isEmpty(messages) && !hasSetLink) {
      setActiveChat(id);
      setLink(true);
    }
  }, [chats, messages, props, setActiveChat, hasSetLink, setLink]);

  return (
    <ChatEngine
      height={props.height}
      offset={-7}
      projectID={props.projectID}
      userName={props.accounts.userName}
      userSecret={props.accounts.userSecret}
      development={props.development}
    />
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(ChatEngineApp);
