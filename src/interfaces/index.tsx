export * from './attachment';
export * from './chat';
export * from './chatPerson';
export * from './message';
export * from './person';

import { Props as ChatEngineWindowProps } from '../components/ChatEngine/props';

interface NewProps extends ChatEngineWindowProps {
  projectId: string;
  myUsername: string;
  mySecret: string;
  isDevelopment?: boolean;
}

interface OldProps extends ChatEngineWindowProps {
  projectID: string;
  userName: string;
  userSecret: string;
  development?: boolean;
}

export type ChatEngineProps = NewProps | OldProps;

let isNewAuth = (p: any): p is NewProps => !!p.projectId;

/**
 * TODO: This might not be a good name
 * This will make sure old Auth props are converted to new ones.
 * */
export const sanitizeProps = (props: ChatEngineProps): NewProps => {
  if (isNewAuth(props)) {
    return props;
  } else {
    return {
      projectId: props.projectID,
      myUsername: props.userName,
      mySecret: props.userSecret,
      isDevelopment: props.development,
    } as NewProps;
  }
};
