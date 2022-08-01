import { ChatObject, MessageObject, PersonObject } from '../../interfaces';

export interface Props {
  projectId?: string;
  chatId?: number | string;
  chatAccessKey?: string;
  wsUrl?: string;
  onConnect?: () => Promise<void>;
  onAuthFail?: () => Promise<void>;
  onError?: () => Promise<void>;
  onClose?: () => Promise<void>;
  onRefresh?: () => Promise<void>;
  onEditChat?: (chat: ChatObject) => Promise<void>;
  onDeleteChat?: (chat: ChatObject) => Promise<void>;
  onNewMessage?: (chatId: number, message: MessageObject) => Promise<void>;
  onEditMessage?: (chatId: number, message: MessageObject) => Promise<void>;
  onDeleteMessage?: (chatId: number, message: MessageObject) => Promise<void>;
  onIsTyping?: (chatId: number, person: PersonObject) => Promise<void>;
}
