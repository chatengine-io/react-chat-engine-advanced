export * from './attachment';
export * from './chat';
export * from './chatPerson';
export * from './message';
export * from './person';

import { Props as ComponentProps } from '../components/ChatEngine/props';
import { Props as SocketProps } from '../sockets/UserSocket/props';

interface ExperienceProps {
  onAuthFail?: () => void;
}

export interface ChatEngineProps
  extends ComponentProps,
    ExperienceProps,
    SocketProps {
  projectId: string;
  myUsername: string;
  mySecret: string;
  isDevelopment?: boolean;
  timezoneOffset?: number;
}
