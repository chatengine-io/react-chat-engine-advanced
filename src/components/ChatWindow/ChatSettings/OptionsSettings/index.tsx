import React from 'react';
import { Props } from './props';
import { styles } from './styles';

import { Button } from '../../../Components/Button';
import { Dropdown } from '../../../Components/Dropdown';

export const OptionsSettings: React.FC<Props> = (props: Props) => {
  if (props.renderOptionsSettings) {
    return <>{props.renderOptionsSettings(props)}</>;
  }

  return (
    <Dropdown label="Options" style={{ ...styles.style, ...props.style }}>
      <Button
        type="danger"
        onClick={() =>
          props.onDeleteChatClick &&
          props.chat &&
          props.onDeleteChatClick(props.chat)
        }
        style={{
          ...styles.deleteChatButtonStyle,
          ...props.deleteChatButtonStyle,
        }}
      >
        Delete this Chat
      </Button>
    </Dropdown>
  );
};
