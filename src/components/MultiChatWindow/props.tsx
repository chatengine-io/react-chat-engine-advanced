import { ChatObject, MessageObject, PersonObject } from '../../interfaces';
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
import { Props as ChatAvatarsProps } from './ChatSettings/ChatAvatars/props';
import { Props as PeopleSettingsProps } from './ChatSettings/PeopleSettings/props';
import { Props as PhotosSettingsProps } from './ChatSettings/PhotosSettings/props';
import { Props as OptionsSettingsProps } from './ChatSettings/OptionsSettings/props';

export interface Props extends ChatEngineStyles {
  // Data
  username?: string;
  chats?: ChatObject[];
  activeChatId?: number;
  messages?: MessageObject[];
  peopleToInvite?: PersonObject[];
  timezoneOffset?: number;
  // State
  isChatListLoading?: boolean;
  isChatFeedLoading?: boolean;
  isChatSettingsLoading?: boolean;
  hasMoreChats?: boolean;
  hasMoreMessages?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => void;
  onChatFormSubmit?: (title: string) => void;
  onChatLoaderShow?: () => void;
  onMessageLoaderShow?: () => void;
  onMessageLoaderHide?: () => void;
  onBottomMessageShow?: () => void;
  onBottomMessageHide?: () => void;
  onMessageFormSubmit?: (message: MessageObject) => void;
  onInvitePersonClick?: (person: PersonObject) => void;
  onRemovePersonClick?: (person: PersonObject) => void;
  onDeleteChatClick?: (chat: ChatObject) => void;
  // Render Functions
  renderChatList?: (
    props: ChatListProps
  ) => JSX.Element | Element | React.FC<ChatListProps>;
  renderChatForm?: (
    props: ChatFromProps
  ) => JSX.Element | Element | React.FC<ChatFromProps>;
  renderChatCard?: (
    props: ChatCardProps
  ) => JSX.Element | Element | React.FC<ChatCardProps>;
  renderChatFeed?: (
    props: ChatFeedProps
  ) => JSX.Element | Element | React.FC<ChatFeedProps>;
  renderChatHeader?: (
    props: ChatHeaderProps
  ) => JSX.Element | Element | React.FC<ChatHeaderProps>;
  renderMessageList?: (
    props: MessageListProps
  ) => JSX.Element | Element | React.FC<MessageListProps>;
  renderMessage?: (
    props: MessageBubbleProps
  ) => JSX.Element | Element | React.FC<MessageBubbleProps>;
  renderWelcomeGif?: (
    props: WelcomeGifProps
  ) => JSX.Element | Element | React.FC<WelcomeGifProps>;
  renderMessageForm?: (
    props: MessageFormProps
  ) => JSX.Element | Element | React.FC<MessageFormProps>;
  renderChatSettings?: (
    props: ChatSettingsProps
  ) => JSX.Element | Element | React.FC<ChatSettingsProps>;
  renderChatAvatars?: (
    props: ChatAvatarsProps
  ) => JSX.Element | Element | React.FC<PeopleSettingsProps>;
  renderPeopleSettings?: (
    props: PeopleSettingsProps
  ) => JSX.Element | Element | React.FC<PeopleSettingsProps>;
  renderPhotosSettings?: (
    props: PhotosSettingsProps
  ) => JSX.Element | Element | React.FC<PhotosSettingsProps>;
  renderOptionsSettings?: (
    props: OptionsSettingsProps
  ) => JSX.Element | Element | React.FC<OptionsSettingsProps>;
}
