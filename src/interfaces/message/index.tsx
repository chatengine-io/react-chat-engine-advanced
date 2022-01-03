import { AttachmentObject } from '../attachment';
import { PersonObject } from '../person';

export interface MessageObject {
  id?: number;
  text: string | null;
  sender_username: string;
  created: string;
  attachments: Array<AttachmentObject>;
  custom_json: object | string;
  sender?: PersonObject; // Empty messages have no sender
}
