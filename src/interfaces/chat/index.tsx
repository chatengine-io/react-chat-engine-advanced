import { MessageObject } from '../message';
import { AttachmentObject } from '../attachment';
import { ChatPersonObject } from '../chatPerson';
import { PersonObject } from '../person';

export interface ChatObject {
  id: number;
  title: string;
  created: string;
  is_direct_chat: boolean;
  custom_json: object | string;
  last_message: MessageObject;
  attachments: Array<AttachmentObject>;
  people: Array<ChatPersonObject>;
  admin: PersonObject;
}
