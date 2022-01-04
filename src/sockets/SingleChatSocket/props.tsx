import { ChatObject, MessageObject, PersonObject } from '../../interfaces';

export interface Props {
  projectId?: string;
  chatId?: number | string;
  chatAccessKey?: string;
  isDevelopment?: boolean;
  onConnect?: () => void;
  onAuthFail?: () => void;
  onError?: () => void;
  onClose?: () => void;
  onRefresh?: () => void;
  onEditChat?: (chat: ChatObject) => void;
  onDeleteChat?: (chat: ChatObject) => void;
  onNewMessage?: (chatId: number, message: MessageObject) => void;
  onEditMessage?: (chatId: number, message: MessageObject) => void;
  onDeleteMessage?: (chatId: number, message: MessageObject) => void;
  onIsTyping?: (chatId: number, person: PersonObject) => void;
}
