import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';

export const ChatForm: React.FC<Props> = ({
  style = {},
  titleStyle = {},
  inputStyle = {},
  buttonStyle = {},
  onFormSubmit,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    onFormSubmit && onFormSubmit(value);
    setValue('');
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div
      className="ce-chat-form"
      style={{
        ...styles.chatForm,
        ...style,
        // Not sure why this is here, might need it later
        // ...{ marginLeft: props.onClose ? '40px' : '0px' },
      }}
    >
      {selected ? (
        <form onSubmit={onSubmit}>
          <Input
            autoFocus
            value={value}
            label="Chat Title"
            id="ce-new-chat-title-field"
            onBlur={() => setSelected(false)}
            style={{
              ...{ width: '100%' },
              ...inputStyle,
            }}
            onChange={onChange}
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
            My Chats
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
