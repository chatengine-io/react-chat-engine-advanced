import { Properties } from 'csstype';

export interface ChatAvatarsStyle {
  container: Properties;
  onePerson: {
    avatarOne: Properties;
  };
  twoPerson: {
    avatarOne: Properties;
    avatarTwo: Properties;
  };
  threePerson: {
    avatarOne: Properties;
    avatarTwo: Properties;
    avatarThree: Properties;
  };
}

export const styles: ChatAvatarsStyle = {
  container: {
    width: '100%',
    paddingTop: '14px',
  } as Properties,
  onePerson: {
    avatarOne: {
      float: 'left',
      position: 'relative',
      left: 'calc(50% - 22px)',
    } as Properties,
  },
  twoPerson: {
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
  threePerson: {
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
