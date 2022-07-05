import React, { useEffect, useState } from 'react';

import { MessageFormProps } from './props';
import { styles } from './styles';

import { AttachmentInput } from './AttachmentInput';

import { File } from '../../../Components/File';
import { Image } from '../../../Components/Image';

import { isImage } from '../../../util/file';
import { MessageObject, AttachmentObject } from '../../../../interfaces';

export const MessageForm: React.FC<MessageFormProps> = (
  props: MessageFormProps
) => {
  const { label = '' } = props;

  const [iter, setIter] = useState(0); // Forces attachments update
  const [value, setValue] = useState<string>('');
  const [height, setHeight] = useState<number>(0);
  const [buttonHover, setButtonHover] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<Array<File>>([]);

  useEffect(() => resize(), []);

  const resize = () => {
    var textarea = document.getElementById('msg-textarea');
    if (textarea !== null) {
      textarea.style.height = '';
      textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px';
      setHeight(Math.min(textarea.scrollHeight, 150));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
    resize();
  };

  const onSubmit = () => {
    const created = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);
    const localAttachments: AttachmentObject[] = attachments.map(
      (attachment) => {
        return {
          id: -1,
          created: new Date().toString(),
          file: attachment.name,
          blob: attachment,
        };
      }
    );

    const message: MessageObject = {
      attachments: localAttachments,
      text: value,
      sender_username: props.username ? props.username : '',
      custom_json: {},
      created,
    };

    props.onSubmit && props.onSubmit(message);

    setValue('');
    setAttachments([]);
    resize();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (value.length > 0) {
        onSubmit();
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
          key={`draft-${index}`}
          className="ce-draft-attachment-wrapper"
          style={{
            ...styles.draftAttachmentStyle,
            ...props.draftAttachmentStyle,
          }}
        >
          {renderImage && isImage(attachment.name) && (
            <Image
              url={url}
              style={{ ...styles.draftImageStyle, ...props.draftImageStyle }}
              className="ce-draft-image"
            />
          )}

          {!renderImage && !isImage(attachment.name) && (
            <File
              url={url}
              fileName={`📄 ${attachment.name}`}
              style={{ ...styles.draftFileStyle, ...props.draftFileStyle }}
              className="ce-draft-file"
            />
          )}

          {((!renderImage && !isImage(attachment.name)) ||
            (renderImage && isImage(attachment.name))) && (
            <button
              className="ce-message-attachment-remove-btn"
              onClick={() => onRemove(index)}
              style={{
                ...styles.draftAttachmentRemoveStyle,
                ...props.draftAttachmentRemoveStyle,
              }}
            >
              ❌
            </button>
          )}
        </span>
      );
    });
  };

  if (props.renderMessageForm) {
    return <>{props.renderMessageForm(props)}</>;
  }

  return (
    <div
      id="ce-message-form"
      style={{ ...styles.style, ...props.style }}
      className="ce-message-form"
    >
      <div className="ce-message-form-attachments-row">
        {renderAttachments(true)}
      </div>

      <div className="ce-message-form-attachments-row">
        {renderAttachments(false)}
      </div>

      <textarea
        id="msg-textarea"
        className="ce-message-form-input"
        value={value}
        placeholder={label}
        rows={1}
        onKeyDown={onKeyDown}
        onChange={onChange}
        style={{
          ...styles.inputStyle,
          ...{ overflowY: height === 150 ? 'scroll' : 'hidden' },
          ...props.inputStyle,
        }}
      />

      <AttachmentInput
        onSelectFiles={(files) => {
          files !== null && setAttachments(Array.from(files));
        }}
        style={{
          ...styles.attachmentInputStyle,
          ...props.attachmentInputStyle,
        }}
        iconStyle={{
          ...styles.attachmentInputIconStyle,
          ...props.attachmentInputIconStyle,
        }}
      />

      <div
        id="ce-send-message-button"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        onClick={onSubmit}
        style={{
          ...styles.sendButtonStyle,
          ...{ backgroundColor: buttonHover ? '#40a9ff' : '#1890ff' },
          ...props.sendButtonStyle,
        }}
      >
        Send
      </div>
    </div>
  );
};
