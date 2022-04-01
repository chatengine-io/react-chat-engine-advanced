import React from 'react';

import { Props } from './props';
import { styles, ChatAvatarsStyle, AvatarsStyle } from './styles';

import { Avatar } from '../../../Components/Avatar';
import { PersonObject } from '../../../../interfaces';

export const ChatAvatars: React.FC<Props> = (props: Props) => {
  const { users = [] } = props;

  const getStyle = (
    people: PersonObject[],
    styles: ChatAvatarsStyle
  ): AvatarsStyle => {
    if (people.length === 1) {
      return styles.oneAvatarStyle ? styles.oneAvatarStyle : {};
    } else if (people.length === 2) {
      return styles.twoAvatarsStyle ? styles.twoAvatarsStyle : {};
    } else {
      return styles.threeAvatarsStyle ? styles.threeAvatarsStyle : {};
    }
  };

  const getPeopleToRender = (people: PersonObject[]): PersonObject[] => {
    if (props.isDirectChat) {
      const otherPerson = users.find(
        (person) => person.username !== props.username
      );
      return otherPerson ? [otherPerson] : [];
    }
    return people.slice(0, 3);
  };

  const topPeople = getPeopleToRender(users);
  const style = getStyle(users, styles);
  const propsStyle = getStyle(users, props);

  return (
    <div
      className="ce-chat-avatars"
      style={{ ...styles.style, ...props.style }}
    >
      <Avatar
        username={topPeople[0] ? topPeople[0].username : undefined}
        avatarUrl={topPeople[0] ? topPeople[0].avatar : undefined}
        style={{
          ...style.avatarOne,
          ...{ display: topPeople[0] ? 'inherit' : 'none' },
          ...propsStyle.avatarOne,
        }}
      />

      <Avatar
        username={topPeople[1] ? topPeople[1].username : undefined}
        avatarUrl={topPeople[1] ? topPeople[1].avatar : undefined}
        style={{
          ...style.avatarTwo,
          ...{ display: topPeople[1] ? 'inherit' : 'none' },
          ...propsStyle.avatarTwo,
        }}
      />

      <Avatar
        username={topPeople[2] ? topPeople[2].username : undefined}
        avatarUrl={topPeople[2] ? topPeople[2].avatar : undefined}
        style={{
          ...style.avatarThree,
          ...{ display: topPeople[2] ? 'inherit' : 'none' },
          ...propsStyle.avatarThree,
        }}
      />
    </div>
  );
};