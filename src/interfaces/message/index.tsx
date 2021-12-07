import { AttachmentProps } from '../attachment';
import { PersonProps } from '../person';

export interface MessageProps {
  id?: number;
  text: string | null;
  sender_username: string;
  created: string;
  attachments: Array<AttachmentProps>;
  custom_json: object | string;
  sender?: PersonProps; // Empty messages have no sender
}

export interface MessagesProps {
  [created: string]: MessageProps;
}
