import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Button } from '../Button';
import { Input } from '../Input';

export const ChatForm: React.FC<Props> = ({
  style = {},
  titleStyle = {},
  buttonStyle = {},
}) => {
  const [selected, setSelected] = useState<boolean>(false);

  function handleSubmit() {}

  return (
    <div
      className="ce-chat-form"
      style={{
        ...styles.chatForm,
        ...style,
        // ...{ marginLeft: props.onClose ? '40px' : '0px' },
      }}
    >
      {selected ? (
        <form onSubmit={handleSubmit}>
          <Input
            autoFocus
            label="Chat Title"
            // value={value}
            id="ce-new-chat-title-field"
            onBlur={() => console.log('okok')}
            style={{ width: '100%' }}
            // handleChange={(e) => handleChange(e)}
          />
        </form>
      ) : (
        <div>
          <span
            style={{
              ...styles.chatFormTitle,
              ...titleStyle,
            }}
          >
            My Chats {selected && 'selected'}
          </span>

          <Button
            style={{
              ...{ float: 'right' },
              ...buttonStyle,
            }}
            icon="+"
            id="new-chat-plus-button"
            onClick={() => setSelected(true)}
          />
        </div>
      )}
    </div>
  );
};
