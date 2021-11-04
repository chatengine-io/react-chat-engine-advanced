import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Button } from '../Button';

export const ChatForm: React.FC<Props> = ({ style = {} }) => {
  const [value, setValue] = useState<string>('');
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      className="ce-chat-form-container"
      style={{
        ...styles.newChatContainer,
        ...style,
        // ...{ marginLeft: props.onClose ? '40px' : '0px' },
      }}
    >
      <div>
        <div style={{ height: '0px' }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: '24px',
              position: 'relative',
              top: '4px',
              width: 'calc(100% - 48px)',
            }}
          >
            My Chats
          </div>
        </div>

        <div style={{ width: '100%', textAlign: 'right' }}>
          <Button
            icon="plus"
            id="new-chat-plus-button"
            onClick={() => setSelected(true)}
          />
        </div>
      </div>
    </div>
  );
};
