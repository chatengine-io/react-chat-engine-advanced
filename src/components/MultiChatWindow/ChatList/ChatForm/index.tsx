import React, { useState } from 'react';

import { ChatFormProps } from './props';
import { styles } from './styles';

import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';

export const ChatForm: React.FC<ChatFormProps> = (props: ChatFormProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.onFormSubmit && props.onFormSubmit(value);
    setValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  if (props.renderChatForm) {
    return <>{props.renderChatForm(props)}</>;
  }

  return (
    <div
      className="ce-chat-form"
      style={{
        ...styles.style,
        ...props.style,
      }}
    >
      <span
        className="ce-chat-form-title"
        style={{
          ...styles.titleStyle,
          ...props.titleStyle,
        }}
      >
        My Chats
      </span>

      <Button
        style={{
          ...styles.buttonStyle,
          ...props.buttonStyle,
        }}
        className="ce-chat-form-button"
        onClick={() => setSelected(true)}
      >
        +
      </Button>

      <form className="ce-chat-form-html-form" onSubmit={onSubmit}>
        <Input
          autoFocus
          value={value}
          label="Chat Title"
          className="ce-chat-form-input"
          style={{
            ...styles.inputStyle,
            ...{ visibility: selected ? 'visible' : 'hidden' },
            ...props.inputStyle,
          }}
          onChange={onChange}
          onBlur={() => setSelected(false)}
        />
      </form>
    </div>
  );
};
