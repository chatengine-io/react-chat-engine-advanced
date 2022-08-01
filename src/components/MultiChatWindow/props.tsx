import { ChatObject, MessageObject, PersonObject } from '../../interfaces';
import { ChatEngineStyles } from './styles';

import { ChatListProps } from './ChatList/props';
import { ChatFormProps } from './ChatList/ChatForm/props';
import { ChatCardProps } from './ChatList/ChatCard/props';

import { ChatFeedProps } from './ChatFeed/props';
import { ChatHeaderProps } from './ChatFeed/ChatHeader/props';
import { MessageListProps } from './ChatFeed/MessageList/props';
import { MessageProps } from './ChatFeed/MessageList/Message/props';
import { MessageFormProps } from './ChatFeed/MessageForm/props';
import { WelcomeGifProps } from './ChatFeed/WelcomeGif/props';
import { ChatSettingsProps } from './ChatSettings/props';
import { ChatAvatarsProps } from './ChatSettings/ChatAvatars/props';
import { PeopleSettingsProps } from './ChatSettings/PeopleSettings/props';
import { PhotosSettingsProps } from './ChatSettings/PhotosSettings/props';
import { OptionsSettingsProps } from './ChatSettings/OptionsSettings/props';

export interface MultiChatWindowProps extends ChatEngineStyles {
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
  isMobileChatListOpen?: boolean;
  isMobileChatSettingsOpen?: boolean;
  // Hooks
  onChatCardClick?: (chatId: number) => Promise<void>;
  onChatFormSubmit?: (title: string) => Promise<void>;
  onChatLoaderShow?: () => Promise<void>;
  onMessageLoaderShow?: () => Promise<void>;
  onMessageLoaderHide?: () => Promise<void>;
  onBottomMessageShow?: () => Promise<void>;
  onBottomMessageHide?: () => Promise<void>;
  onMessageFormSubmit?: (message: MessageObject) => Promise<void>;
  onInvitePersonClick?: (person: PersonObject) => Promise<void>;
  onRemovePersonClick?: (person: PersonObject) => Promise<void>;
  onDeleteChatClick?: (chat: ChatObject) => Promise<void>;
  onMobileChatListClick?: () => Promise<void>;
  onMobileChatSettingsClick?: () => Promise<void>;
  onCloseMobileChatSettingsClick?: () => Promise<void>;
  // Render Functions
  renderChatList?: (
    props: ChatListProps
  ) => JSX.Element | Element | React.FC<ChatListProps>;
  renderChatForm?: (
    props: ChatFormProps
  ) => JSX.Element | Element | React.FC<ChatFormProps>;
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
    props: MessageProps
  ) => JSX.Element | Element | React.FC<MessageProps>;
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
