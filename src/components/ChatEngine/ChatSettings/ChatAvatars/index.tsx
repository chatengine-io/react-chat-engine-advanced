import React from 'react';

import { Props } from './props';
import { styles } from './styles';

import { Avatar } from '../../../Components/Avatar';
import { PersonProps } from '../../../util/interfaces';

export const ChatAvatars: React.FC<Props> = (props: Props) => {
  const {
    users = [],
    oneAvatarStyle = { avatarOne: {} },
    twoAvatarsStyle = { avatarOne: {}, avatarTwo: {} },
    threeAvatarsStyle = { avatarOne: {}, avatarTwo: {}, avatarThree: {} },
  } = props;

  const topPeople = users.slice(0, 3);
  const otherPerson = users.find(
    (person) => person.username !== props.myUsername
  );

  const renderAvatars = (
    people: PersonProps[],
    avatarStyles: React.CSSProperties[]
  ) => {
    if (people.length != avatarStyles.length) {
      return <div />;
    }

    return (
      <div style={{ ...styles.style, ...props.style }}>
        {people.map((person, i) => {
          return (
            <Avatar
              key={`avatar_${i}`}
              style={avatarStyles[i]}
              username={person.username}
              avatarUrl={person.avatar ? person.avatar : undefined}
            />
          );
        })}
      </div>
    );
  };

  const renderOnePerson = (people: PersonProps[]) => {
    return renderAvatars(people, [
      { ...styles.oneAvatarStyle?.avatarOne, ...oneAvatarStyle.avatarOne },
    ]);
  };

  const renderTwoPeople = (people: PersonProps[]) => {
    const avatarStyles = [
      { ...styles.twoAvatarsStyle?.avatarOne, ...twoAvatarsStyle.avatarOne },
      { ...styles.twoAvatarsStyle?.avatarTwo, ...twoAvatarsStyle.avatarTwo },
    ];

    return renderAvatars(people, avatarStyles);
  };

  const renderThreePeople = (people: PersonProps[]) => {
    const avatarStyles = [
      {
        ...styles.threeAvatarsStyle?.avatarOne,
        ...threeAvatarsStyle.avatarOne,
      },
      {
        ...styles.threeAvatarsStyle?.avatarTwo,
        ...threeAvatarsStyle.avatarTwo,
      },
      {
        ...styles.threeAvatarsStyle?.avatarThree,
        ...threeAvatarsStyle.avatarThree,
      },
    ];

    return renderAvatars(people, avatarStyles);
  };

  return (
    <div className="ce-chat-settings-container">
      <div className="ce-chat-avatars-row">
        {topPeople.length === 1 && renderOnePerson(topPeople)}

        {props.isDirectChat && otherPerson && renderOnePerson([otherPerson])}

        {!props.isDirectChat &&
          otherPerson &&
          topPeople.length === 2 &&
          renderTwoPeople(topPeople)}

        {!props.isDirectChat &&
          otherPerson &&
          topPeople.length === 3 &&
          renderThreePeople(topPeople)}
      </div>
    </div>
  );
};
