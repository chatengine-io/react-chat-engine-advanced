import { HTMLAttributes } from 'react';

import { Properties } from 'csstype';

import { ChatProps } from '../../util/interfaces';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: Properties;
  chats: Array<ChatProps>;
  activeChatID?: number;
  onChatClick?: (chatID: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
  isLoading?: boolean;
  hasMoreChats?: boolean;
  userName?: string;
}
