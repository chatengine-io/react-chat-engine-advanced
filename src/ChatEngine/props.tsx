import { ChatsProps, MessagesProps } from '../util/interfaces';
import { ChatEngineStyles } from './styles';

import { Props as ChatListProps } from './ChatList/props';
import { Props as ChatFromProps } from './ChatList/ChatForm/props';
import { Props as ChatCardProps } from './ChatList/ChatCard/props';

import { Props as ChatFeedProps } from './ChatFeed/props';
import { Props as ChatHeaderProps } from './ChatFeed/ChatHeader/props';
import { Props as MessageListProps } from './ChatFeed/MessageList/props';
import { Props as MessageFormProps } from './ChatFeed/MessageForm/props';
// TODO: Render Message in here
import { Props as ChatSettingsProps } from './ChatSettings/props';
import { Props as PeopleSettingsProps } from './ChatSettings/PeopleSettings/props';
import { Props as PhotosSettingsProps } from './ChatSettings/PhotosSettings/props';
import { Props as OptionsSettingsProps } from './ChatSettings/OptionsSettings/props';

export interface Props extends ChatEngineStyles {
  // Data
  chats?: ChatsProps;
  activeChatKey?: number;
  messages?: MessagesProps;
  myUsername?: string;
  // State
  isChatListLoading?: boolean;
  isChatFeedLoading?: boolean;
  isChatSettingsLoading?: boolean;
  hasMoreChats?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderVisible?: () => void;
  onTopMessageShow?: () => void;
  onBottomMessageShow?: () => void;
  onMessageSend?: (value: string, attachments: Array<File>) => void;
  // Render Functions
  renderChatList?: (props: ChatListProps) => React.FC<ChatListProps>;
  renderChatForm?: (props: ChatFromProps) => React.FC<ChatFromProps>;
  renderChatCard?: (props: ChatCardProps) => React.FC<ChatCardProps>;
  renderChatFeed?: (props: ChatFeedProps) => React.FC<ChatFeedProps>;
  renderChatHeader?: (props: ChatHeaderProps) => React.FC<ChatHeaderProps>;
  renderMessageList?: (props: MessageListProps) => React.FC<MessageListProps>;
  renderMessageForm?: (props: MessageFormProps) => React.FC<MessageFormProps>;
  renderChatSettings?: (
    props: ChatSettingsProps
  ) => React.FC<ChatSettingsProps>;
  renderPeopleSettings?: (
    props: PeopleSettingsProps
  ) => React.FC<PeopleSettingsProps>;
  renderPhotosSettings?: (
    props: PhotosSettingsProps
  ) => React.FC<PhotosSettingsProps>;
  renderOptionsSettings?: (
    props: OptionsSettingsProps
  ) => React.FC<OptionsSettingsProps>;
}
