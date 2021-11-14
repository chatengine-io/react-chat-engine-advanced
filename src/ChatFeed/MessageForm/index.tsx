import React, { useEffect, useState } from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

import { AttachmentInput } from './AttachmentInput';

export const MessageForm: React.FC<Props> = ({
  label = '',
  style = {},
  onChange,
  onSubmit,
}: Props) => {
  const [value, setValue] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const overflowStyle: Properties = {
    overflowY: height === 150 ? 'scroll' : 'hidden',
  };
  const buttonHoverStyle: Properties = {
    backgroundColor: buttonHover ? '#40a9ff' : '#1890ff',
  };

  const resize = () => {
    var textarea = document.getElementById('msg-textarea');
    if (textarea !== null) {
      textarea.style.height = '';
      textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
      setHeight(Math.min(textarea.scrollHeight, 150));
    }
  };

  useEffect(() => resize(), []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
    resize();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value.length > 0) {
        onSubmit && onSubmit(value);
      }
    }
  };

  return (
    <div
      id="msg-form-container"
      style={{ ...styles.messageForm, ...style.messageForm }}
      className="ce-message-form-container"
    >
      <span>
        <textarea
          id="msg-textarea"
          className="ce-input ce-textarea-input"
          rows={1}
          style={{
            ...styles.input,
            ...overflowStyle,
            ...style.input,
          }}
          value={value}
          placeholder={label}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />
      </span>

      <span>
        <AttachmentInput
          onSelectFiles={(files) => console.log('files', files)}
        />
      </span>

      <span>
        <div
          id="ce-send-message-button"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => onSubmit && onSubmit(value)}
          style={{
            ...styles.sendButton,
            ...buttonHoverStyle,
            ...style.sendButton,
          }}
        >
          Send
        </div>
      </span>
    </div>
  );
};
