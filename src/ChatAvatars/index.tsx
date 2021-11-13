import React from 'react';
import { Avatar } from '../Avatar';
import { ChatPersonProps, PersonProps } from '../util/interfaces';
import { Props } from './props';
import { styles } from './styles';
import { Properties } from 'csstype';

const getOtherPerson = (
  people: ChatPersonProps[],
  currentUser: PersonProps
) => {
  return people.find(
    (person) => person.person.username !== currentUser.username
  );
};

const renderAvatars = (
  people: ChatPersonProps[],
  avatarStyles: Properties[]
) => {
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
              username={person.person.username}
              avatarUrl={
                person.person.avatar ? person.person.avatar : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
};

const renderOnePerson = (people: ChatPersonProps[]) => {
  return renderAvatars(people, [styles.onePerson.avatarOne]);
};

const renderTwoPeople = (people: ChatPersonProps[]) => {
  const avatarStyles = [styles.twoPerson.avatarOne, styles.twoPerson.avatarTwo];

  return renderAvatars(people, avatarStyles);
};

const renderThreePeople = (people: ChatPersonProps[]) => {
  const avatarStyles = [
    styles.threePerson.avatarOne,
    styles.threePerson.avatarTwo,
    styles.threePerson.avatarThree,
  ];

  return renderAvatars(people, avatarStyles);
};

export const ChatAvatars: React.FC<Props> = ({ chat, currentUser }: Props) => {
  const topPeople = chat.people.slice(0, 3);
  const otherPerson = getOtherPerson(chat.people, currentUser);

  return (
    <div className="ce-chat-settings-container">
      <div className="ce-chat-avatars-row">
        {topPeople.length === 1 && renderOnePerson(topPeople)}

        {chat.is_direct_chat && otherPerson && renderOnePerson([otherPerson])}

        {!chat.is_direct_chat &&
          otherPerson &&
          topPeople.length === 2 &&
          renderTwoPeople(topPeople)}

        {!chat.is_direct_chat &&
          otherPerson &&
          topPeople.length === 3 &&
          renderThreePeople(topPeople)}
      </div>
    </div>
  );
};
