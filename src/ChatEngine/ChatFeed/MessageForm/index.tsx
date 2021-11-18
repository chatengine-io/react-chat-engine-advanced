import React, { useEffect, useState } from 'react';

import { Properties } from 'csstype';

import { Props } from './props';
import { styles } from './styles';

import { AttachmentInput } from './AttachmentInput';

import { File } from '../../../Components/File';
import { Image } from '../../../Components/Image';

import { isImage } from '../../../util/file';

export const MessageForm: React.FC<Props> = ({
  label = '',
  customStyle = {},
  onChange,
  onSubmit,
}: Props) => {
  const [iter, setIter] = useState(0); // Forces attachments update
  const [value, setValue] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<Array<File>>([]);

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
        onSubmit && onSubmit(value, attachments);
      }
    }
  };

  const onRemove = (index: number) => {
    if (attachments && attachments !== null) {
      const newAttachments = attachments;
      newAttachments.splice(index, 1);
      setAttachments(newAttachments);
      setIter(iter + 1);
    }
  };

  const renderAttachments = (renderImage: boolean) => {
    if (!attachments || attachments === null) return <div />;

    return Array.from(attachments).map((attachment, index) => {
      const url = URL.createObjectURL(attachment);
      console.log(attachment.name, url);
      return (
        <span
          key={`draft_attachment_${index}`}
          style={{
            ...styles.attachmentWrapper,
            ...customStyle.attachmentWrapper,
          }}
        >
          {renderImage && isImage(attachment.name) && (
            <Image
              url={url}
              style={{
                padding: '6px',
                height: '60px',
                width: '60px',
              }}
            />
          )}

          {!renderImage && !isImage(attachment.name) && (
            <File url={url} fileName={`📄 ${attachment.name}`} />
          )}

          {((!renderImage && !isImage(attachment.name)) ||
            (renderImage && isImage(attachment.name))) && (
            <button
              className="ce-message-attachment-remove-btn"
              style={{
                ...styles.removeAttachmentIcon,
                ...customStyle.removeAttachmentIcon,
              }}
              onClick={() => onRemove(index)}
            >
              ❌
            </button>
          )}
        </span>
      );
    });
  };

  return (
    <div
      id="msg-form-container"
      style={{ ...styles.messageForm, ...customStyle.messageForm }}
      className="ce-message-form-container"
    >
      <div>{renderAttachments(true)}</div>

      <div>{renderAttachments(false)}</div>

      <span>
        <textarea
          id="msg-textarea"
          className="ce-input ce-textarea-input"
          rows={1}
          style={{
            ...styles.input,
            ...overflowStyle,
            ...customStyle.input,
          }}
          value={value}
          placeholder={label}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />
      </span>

      <span>
        <AttachmentInput
          customStyle={customStyle}
          onSelectFiles={(files) => {
            files !== null && setAttachments(Array.from(files));
          }}
        />
      </span>

      <span>
        <div
          id="ce-send-message-button"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => onSubmit && onSubmit(value, attachments)}
          style={{
            ...styles.sendButton,
            ...buttonHoverStyle,
            ...customStyle.sendButton,
          }}
        >
          Send
        </div>
      </span>
    </div>
  );
};
