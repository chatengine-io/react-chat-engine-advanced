import React from 'react';
import { connect } from 'react-redux';

import { ChatEngineWindow, Socket, useChatEngine } from 'react-chat-engine';

const ChatEngineApp = (props) => {
  const state = useChatEngine(
    props.projectID,
    props.accounts.userName,
    props.accounts.userSecret,
    props.development
  );

  return (
    <div>
      <Socket
        projectId={props.projectID}
        myUsername={props.userName}
        mySecret={props.userSecret}
        isDevelopment={props.development}
        {...state}
      />

      <ChatEngineWindow
        myUsername={props.userName}
        timezoneOffset={-7}
        {...state}
        style={{ height: props.height }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { accounts: state.accounts };
}

export default connect(mapStateToProps, {})(ChatEngineApp);
