import { ChatObject, MessageObject, PersonObject } from '../../interfaces';

export interface Props {
  projectId: string;
  username: string;
  secret: string;
  sessionToken?: string;
  httpUrl?: string;
  wsUrl?: string;
  onConnect?: () => void;
  onAuthFail?: () => void;
  onError?: () => void;
  onClose?: () => void;
  onRefresh?: () => void;
  onNewChat?: (chat: ChatObject) => void;
  onEditChat?: (chat: ChatObject) => void;
  onDeleteChat?: (chat: ChatObject) => void;
  onNewMessage?: (chatId: number, message: MessageObject) => void;
  onEditMessage?: (chatId: number, message: MessageObject) => void;
  onDeleteMessage?: (chatId: number, message: MessageObject) => void;
  onIsTyping?: (chatId: number, person: PersonObject) => void;
}
