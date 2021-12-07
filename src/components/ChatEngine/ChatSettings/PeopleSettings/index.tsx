import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Avatar } from '../../../Components/Avatar';
import { Autocomplete } from '../../../Components/Autocomplete';
import { Button } from '../../../Components/Button';
import { Dropdown } from '../../../Components/Dropdown';

import { PersonProps, ChatPersonProps } from '../../../../interfaces';

export const PeopleSettings: React.FC<Props> = (props: Props) => {
  const { chat = { people: [] }, otherPeople = [] } = props;

  const renderChatPeople = (chatPeople: Array<ChatPersonProps>) => {
    return chatPeople.map((chatPerson, index) => {
      const { person } = chatPerson;

      return (
        <div
          key={`member-${index}`}
          style={{ height: '52px', position: 'relative' }}
        >
          <Avatar
            username={person.username}
            avatarUrl={person.avatar}
            isOnline={person.is_online}
            style={{ ...styles.avatarStyle, ...props.avatarStyle }}
          />

          <div style={{ ...styles.usernameStyle, ...props.usernameStyle }}>
            {person.username}
          </div>

          {props.canDelete && (
            <Button
              type="danger"
              className="ce-member-delete-button"
              onClick={() =>
                props.onPersonDelete && props.onPersonDelete(person)
              }
              style={{
                ...styles.deleteButtonStyle,
                ...props.deleteButtonStyle,
              }}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
              </svg>
            </Button>
          )}
        </div>
      );
    });
  };

  const renderChatPeopleOption = (option: object) => {
    const person = option as PersonProps;
    return (
      <div
        className="ce-add-member-option"
        style={{ ...styles.optionStyle, ...props.optionStyle }}
        onClick={() => props.onPersonAdd && props.onPersonAdd(person)}
      >
        {person.username}
      </div>
    );
  };

  if (props.renderPeopleSettings) {
    return <>{props.renderPeopleSettings(props)}</>;
  }

  return (
    <Dropdown label="Members" style={{ ...styles.style, ...props.style }}>
      {renderChatPeople(chat.people)}

      <Autocomplete
        label="Add Member"
        options={otherPeople}
        renderOption={renderChatPeopleOption}
        style={{ ...styles.addMemberStyle, ...props.addMemberStyle }}
        inputStyle={{
          ...styles.addMemberInputStyle,
          ...props.addMemberInputStyle,
        }}
      />
    </Dropdown>
  );
};
