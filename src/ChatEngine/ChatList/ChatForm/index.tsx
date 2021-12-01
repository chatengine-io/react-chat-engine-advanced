import React, { useState } from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';

export const ChatForm: React.FC<Props> = (props: Props) => {
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
      {!selected && (
        <span
          style={{
            ...styles.titleStyle,
            ...props.titleStyle,
          }}
        >
          My Chats
        </span>
      )}

      {!selected && (
        <Button
          style={{
            ...styles.buttonStyle,
            ...props.buttonStyle,
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
              ...styles.inputStyle,
              ...props.inputStyle,
            }}
            onChange={onChange}
          />
        </form>
      )}
    </div>
  );
};
