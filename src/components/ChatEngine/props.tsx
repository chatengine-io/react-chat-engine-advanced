import { ChatProps, MessageProps, PersonProps } from '../../interfaces';
import { ChatEngineStyles } from './styles';

import { Props as ChatListProps } from './ChatList/props';
import { Props as ChatFromProps } from './ChatList/ChatForm/props';
import { Props as ChatCardProps } from './ChatList/ChatCard/props';

import { Props as ChatFeedProps } from './ChatFeed/props';
import { Props as ChatHeaderProps } from './ChatFeed/ChatHeader/props';
import { Props as MessageListProps } from './ChatFeed/MessageList/props';
import { Props as MessageBubbleProps } from './ChatFeed/MessageList/Message/props';
import { Props as MessageFormProps } from './ChatFeed/MessageForm/props';
import { Props as WelcomeGifProps } from './ChatFeed/WelcomeGif/props';
import { Props as ChatSettingsProps } from './ChatSettings/props';
import { Props as PeopleSettingsProps } from './ChatSettings/PeopleSettings/props';
import { Props as PhotosSettingsProps } from './ChatSettings/PhotosSettings/props';
import { Props as OptionsSettingsProps } from './ChatSettings/OptionsSettings/props';

export interface Props extends ChatEngineStyles {
  // Data
  myUsername: string;
  chats?: ChatProps[];
  activeChatKey?: number;
  messages?: MessageProps[];
  peopleToInvite?: PersonProps[];
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
  onMessageLoaderShow?: () => void;
  onMessageLoaderHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  onMessageSend?: (message: MessageProps) => void;
  onInvitePersonClick?: (person: PersonProps) => void;
  onRemovePersonClick?: (person: PersonProps) => void;
  onDeleteChatClick?: (chat: ChatProps) => void;
  // Render Functions
  renderChatList?: (props: ChatListProps) => React.FC<ChatListProps>;
  renderChatForm?: (props: ChatFromProps) => React.FC<ChatFromProps>;
  renderChatCard?: (props: ChatCardProps) => React.FC<ChatCardProps>;
  renderChatFeed?: (props: ChatFeedProps) => React.FC<ChatFeedProps>;
  renderChatHeader?: (props: ChatHeaderProps) => React.FC<ChatHeaderProps>;
  renderMessageList?: (props: MessageListProps) => React.FC<MessageListProps>;
  renderMessage?: (props: MessageBubbleProps) => React.FC<MessageBubbleProps>;
  renderWelcomeGif?: (props: WelcomeGifProps) => React.FC<WelcomeGifProps>;
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
