import { Properties } from 'csstype';

export interface ChatAvatarsStyle {
  chatAvatarsStyle: Properties;
  oneAvatarStyle: {
    avatarOne: Properties;
  };
  twoAvatarsStyle: {
    avatarOne: Properties;
    avatarTwo: Properties;
  };
  threeAvatarsStyle: {
    avatarOne: Properties;
    avatarTwo: Properties;
    avatarThree: Properties;
  };
}

export const styles: ChatAvatarsStyle = {
  chatAvatarsStyle: {
    width: '100%',
    paddingTop: '14px',
  } as Properties,
  oneAvatarStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px)',
    } as Properties,
  },
  twoAvatarsStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 15px)',
    } as Properties,
    avatarTwo: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 44px - 22px + 15px)',
    } as Properties,
  },
  threeAvatarsStyle: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 24px)',
    } as Properties,
    avatarTwo: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 24px - 44px)',
    } as Properties,
    avatarThree: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px - 44px - 44px + 24px)',
    } as Properties,
  },
};
