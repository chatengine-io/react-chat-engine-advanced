import { MessageProps } from '../message';
import { AttachmentProps } from '../attachment';
import { ChatPersonProps } from '../chatPerson';

export interface ChatProps {
  id: number;
  title: string;
  created: string;
  is_direct_chat: boolean;
  custom_json: object | string;
  last_message: MessageProps;
  attachments: Array<AttachmentProps>;
  people: Array<ChatPersonProps>;
}

export interface ChatsProps {
  [id: number]: ChatProps;
}
