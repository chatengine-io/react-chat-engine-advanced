import { PersonProps } from '../person';

export interface ChatPersonProps {
  person: PersonProps;
  chat_updated: string | null;
  last_read: number | null;
}
