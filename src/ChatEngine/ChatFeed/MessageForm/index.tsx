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
  onChange,
  onSubmit,
  messageFormStyle = {},
  messageFormInputStyle = {},
  messageFormSendButtonStyle = {},
  draftAttachmentStyle = {},
  draftAttachmentRemoveStyle = {},
  attachmentInputStyle = {},
  attachmentInputIconStyle = {},
  draftImageStyle = {},
  draftFileStyle = {},
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

      return (
        <span
          key={`draft_attachment_${index}`}
          className="ce-draft-attachment-wrapper"
          style={{
            ...styles.draftAttachmentStyle,
            ...draftAttachmentStyle,
          }}
        >
          {renderImage && isImage(attachment.name) && (
            <Image
              url={url}
              style={{ ...styles.draftImageStyle, ...draftImageStyle }}
              hoveredStyle={{}}
            />
          )}

          {!renderImage && !isImage(attachment.name) && (
            <File
              url={url}
              fileName={`📄 ${attachment.name}`}
              style={{ ...styles.draftFileStyle, ...draftFileStyle }}
              hoveredStyle={{}}
            />
          )}

          {((!renderImage && !isImage(attachment.name)) ||
            (renderImage && isImage(attachment.name))) && (
            <button
              className="ce-message-attachment-remove-btn"
              style={{
                ...styles.draftAttachmentRemoveStyle,
                ...draftAttachmentRemoveStyle,
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
      style={{ ...styles.messageFormStyle, ...messageFormStyle }}
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
            ...styles.messageFormInputStyle,
            ...overflowStyle,
            ...messageFormInputStyle,
          }}
          value={value}
          placeholder={label}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />
      </span>

      <span>
        <AttachmentInput
          onSelectFiles={(files) => {
            files !== null && setAttachments(Array.from(files));
          }}
          attachmentInputStyle={attachmentInputStyle}
          attachmentInputIconStyle={attachmentInputIconStyle}
        />
      </span>

      <span>
        <div
          id="ce-send-message-button"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => onSubmit && onSubmit(value, attachments)}
          style={{
            ...styles.messageFormSendButtonStyle,
            ...buttonHoverStyle,
            ...messageFormSendButtonStyle,
          }}
        >
          Send
        </div>
      </span>
    </div>
  );
};
