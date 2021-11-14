import React, { useEffect, useState } from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

export const MessageForm: React.FC<Props> = ({
  label = '',
  style = {},
  onChange,
  onSubmit,
}: Props) => {
  const [value, setValue] = useState<string>('');
  const [height, setHeight] = useState<number>(0);

  const overflowStyle: Properties = {
    overflowY: height === 150 ? 'scroll' : 'hidden',
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
        onSubmit && onSubmit(e);
      }
    }
  };

  return (
    <div
      id="msg-form-container"
      style={{ ...styles.messageForm, ...style.messageForm }}
      className="ce-message-form-container"
    >
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
        // onBlur={() => this.setState({ focused: false })}
        // onFocus={() => this.setState({ focused: true })}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
