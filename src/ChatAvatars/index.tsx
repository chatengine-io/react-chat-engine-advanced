import React from 'react';
import { Avatar } from '../Avatar';
import { PersonProps } from '../util/interfaces';
import { Props } from './props';
import { styles } from './styles';
import { Properties } from 'csstype';

const getOtherPerson = (people: PersonProps[], currentUser: PersonProps) => {
  return people.find((person) => person.username !== currentUser.username);
};

const renderAvatars = (people: PersonProps[], avatarStyles: Properties[]) => {
  if (people.length != avatarStyles.length) {
    return <div />;
  }

  return (
    <div style={styles.container}>
      {people.map((person, i) => {
        return (
          <div style={avatarStyles[i]} key={`avatar_${i}`}>
            <Avatar
              showOnline={false}
              username={person.username}
              avatarUrl={person.avatar ? person.avatar : undefined}
            />
          </div>
        );
      })}
    </div>
  );
};

const renderOnePerson = (people: PersonProps[]) => {
  return renderAvatars(people, [styles.onePerson.avatarOne]);
};

const renderTwoPeople = (people: PersonProps[]) => {
  const avatarStyles = [styles.twoPerson.avatarOne, styles.twoPerson.avatarTwo];

  return renderAvatars(people, avatarStyles);
};

const renderThreePeople = (people: PersonProps[]) => {
  const avatarStyles = [
    styles.threePerson.avatarOne,
    styles.threePerson.avatarTwo,
    styles.threePerson.avatarThree,
  ];

  return renderAvatars(people, avatarStyles);
};

export const ChatAvatars: React.FC<Props> = ({
  users,
  currentUser,
  isDirectChat = false,
}: Props) => {
  const topPeople = users.slice(0, 3);
  const otherPerson = getOtherPerson(users, currentUser);

  return (
    <div className="ce-chat-settings-container">
      <div className="ce-chat-avatars-row">
        {topPeople.length === 1 && renderOnePerson(topPeople)}

        {isDirectChat && otherPerson && renderOnePerson([otherPerson])}

        {!isDirectChat &&
          otherPerson &&
          topPeople.length === 2 &&
          renderTwoPeople(topPeople)}

        {!isDirectChat &&
          otherPerson &&
          topPeople.length === 3 &&
          renderThreePeople(topPeople)}
      </div>
    </div>
  );
};
