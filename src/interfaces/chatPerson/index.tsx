import { PersonObject } from '../person';

export interface ChatPersonObject {
  person: PersonObject;
  chat_updated: string | null;
  last_read: number | null;
}
