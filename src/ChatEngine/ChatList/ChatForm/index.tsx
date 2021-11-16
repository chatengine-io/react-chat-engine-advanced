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
        ...customStyle.chatForm,
      }}
    >
      {selected && (
        <form onSubmit={onSubmit}>
          <Input
            autoFocus
            value={value}
            label="Chat Title"
            id="ce-new-chat-title-field"
            onBlur={() => setSelected(false)}
            style={{
              ...styles.chatFormInput,
              ...customStyle.chatFormInput,
            }}
            onChange={onChange}
          />
        </form>
      )}

      {!selected && (
        <span
          style={{
            ...styles.chatFormTitle,
            ...customStyle.chatFormTitle,
          }}
        >
          My Chats
        </span>
      )}

      {!selected && (
        <Button
          style={{
            ...styles.chatFormButton,
            ...customStyle.chatFormButton,
          }}
          icon="+"
          id="new-chat-plus-button"
          onClick={() => setSelected(true)}
        />
      )}
    </div>
  );
};
