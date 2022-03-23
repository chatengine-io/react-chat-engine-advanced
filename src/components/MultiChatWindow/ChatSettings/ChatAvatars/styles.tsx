export interface AvatarsStyle {
  avatarOne?: React.CSSProperties;
  avatarTwo?: React.CSSProperties;
  avatarThree?: React.CSSProperties;
}
export interface ChatAvatarsStyle {
  style?: React.CSSProperties;
  oneAvatarStyle?: AvatarsStyle;
  twoAvatarsStyle?: AvatarsStyle;
  threeAvatarsStyle?: AvatarsStyle;
}

export const styles: ChatAvatarsStyle = {
  style: {
    width: '100%',
    paddingTop: '12px',
    height: 'calc(44px + 14px)',
  },
  oneAvatarStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px)',
    },
  },
  twoAvatarsStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 15px)',
    },
    avatarTwo: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 44px - 22px + 15px)',
    },
  },
  threeAvatarsStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 24px)',
    },
    avatarTwo: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 24px - 44px)',
    },
    avatarThree: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 44px - 44px + 24px)',
    },
  },
};
