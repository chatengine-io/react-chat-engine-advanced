import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';

export const ChatForm: React.FC<Props> = ({
  onFormSubmit,
  customStyle = {},
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onFormSubmit && onFormSubmit(value);
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      className="ce-chat-form"
      style={{
        ...styles.chatFormStyle,
        ...customStyle.chatFormStyle,
      }}
    >
      {!selected && (
        <span
          style={{
            ...styles.myChatsTitleStyle,
            ...customStyle.myChatsTitleStyle,
          }}
        >
          My Chats
        </span>
      )}

      {!selected && (
        <Button
          style={{
            ...styles.chatFormButtonStyle,
            ...customStyle.chatFormButtonStyle,
          }}
          id="new-chat-plus-button"
          onClick={() => setSelected(true)}
        >
          +
        </Button>
      )}

      {selected && (
        <form onSubmit={onSubmit}>
          <Input
            autoFocus
            value={value}
            label="Chat Title"
            id="ce-new-chat-title-field"
            onBlur={() => setSelected(false)}
            style={{
              ...styles.chatFormInputStyle,
              ...customStyle.chatFormInputStyle,
            }}
            onChange={onChange}
          />
        </form>
      )}
    </div>
  );
};
