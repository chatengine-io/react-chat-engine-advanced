import { ChatProps, MessageProps, PersonProps } from '../../interfaces';

export interface Props {
  projectId?: string;
  myUsername?: string;
  mySecret?: string;
  sessionToken?: string;
  onConnect?: () => void;
  onError?: () => void;
  onClose?: () => void;
  onRefresh?: () => void;
  onNewChat?: (chat: ChatProps) => void;
  onEditChat?: (chat: ChatProps) => void;
  onDeleteChat?: (chat: ChatProps) => void;
  onNewMessage?: (chatId: number, message: MessageProps) => void;
  onEditMessage?: (chatId: number, message: MessageProps) => void;
  onDeleteMessage?: (chatId: number, message: MessageProps) => void;
  onIsTyping?: (chatId: number, person: PersonProps) => void;
}
