import { useState } from 'react';

import { ChatProps, MessageProps, PersonProps } from '../interfaces';
import { getDateTime } from '../components/util/dateTime';

import {
  getChatsBefore,
  newChat,
  deleteChat,
  getPeopleToInvite,
  invitePerson,
  removePerson,
  getMessages,
  newMessage,
  getChatsAndMessages,
} from '../actions';

const chatCountIterator = 20;
const messageCountIterator = 50;

export const sortChats = (chats: ChatProps[]) => {
  return chats.sort((a: ChatProps, b: ChatProps) => {
    const aDate =
      a.last_message && a.last_message.created
        ? getDateTime(a.last_message.created, 0)
        : getDateTime(a.created, 0);
    const bDate =
      b.last_message && b.last_message.created
        ? getDateTime(b.last_message.created, 0)
        : getDateTime(b.created, 0);
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
};

export const sortMessages = (messages: MessageProps[]) => {
  return messages.sort((a: MessageProps, b: MessageProps) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });
};

export const useChatEngine = (
  projectId: string,
  myUsername: string,
  mySecret: string
) => {
  // Data
  const [activeChatId, setActiveChatId] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatProps[]>([]);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [peopleToInvite, setPeopleToInvite] = useState<PersonProps[]>([]);

  // State
  const [chatCount, setChatCount] = useState<number>(chatCountIterator);
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);

  const onGetChats = (chats: ChatProps[] = []) => {
    const sortedChats = sortChats(chats);
    setChats(sortedChats);
    setHasMoreChats(Object.keys(chats).length === chatCount);
    setChatCount(Object.keys(chats).length);
  };

  const onNewChat = (chat: ChatProps) => {
    const newChats = [chat].concat(chats ? chats : []);
    setChats(newChats);
    setChatCount(newChats.length);
  };

  const onEditChat = (newChat: ChatProps) => {
    const otherChats = chats
      ? chats.filter((chat) => chat.id !== newChat.id)
      : [];
    const newChats = [newChat].concat(otherChats);
    const sortedChats = sortChats(newChats);
    setChats(sortedChats);
    setChatCount(sortedChats.length);
  };

  const onDeleteChat = (oldChat: ChatProps) => {
    const newChats = chats
      ? chats.filter((chat) => chat.id !== oldChat.id)
      : [];
    setChats(newChats);
    setChatCount(newChats.length);
    if (newChats.length > 0 && activeChatId === oldChat.id)
      onChatCardClick(newChats[0].id);
  };

  const onGetMessages = (chatId: number, messages: MessageProps[]) => {
    void chatId;
    setMessages(messages);
  };

  const onNewMessage = (chatId: number, newMessage: MessageProps) => {
    if (activeChatId === chatId) {
      const otherMessages = messages
        ? messages.filter((message) => message.created !== newMessage.created)
        : [];
      const newMessages = otherMessages.concat(newMessage);
      const sortedMessages = sortMessages(newMessages);
      setMessages(sortedMessages);
    }
  };

  const onEditMessage = (chatId: number, newMessage: MessageProps) => {
    if (chatId === activeChatId) {
      const otherMessages = messages
        ? messages.filter((message) => message.id !== newMessage.id)
        : [];
      const newMessages = [newMessage].concat(otherMessages);
      const sortedMessages = sortMessages(newMessages);
      setMessages(sortedMessages);
    }
  };

  const onDeleteMessage = (chatId: number, oldMessage: MessageProps) => {
    if (chatId === activeChatId) {
      const newMessages = messages
        ? messages.filter((message) => message.id !== oldMessage.id)
        : [];
      setMessages(newMessages);
    }
  };

  const onConnect = () => {
    getChatsAndMessages(
      projectId,
      myUsername,
      mySecret,
      undefined,
      chatCount,
      messageCountIterator,
      onGetChats,
      onChatCardClick,
      onGetMessages
    );
  };

  const onChatFormSubmit = (title: string) => {
    newChat(projectId, myUsername, mySecret, title, (chat) => {
      onNewChat(chat);
      onChatCardClick(chat.id);
    });
  };

  const onChatCardClick = (activeChatId: number) => {
    setActiveChatId(activeChatId);
    getMessages(
      projectId,
      myUsername,
      mySecret,
      activeChatId,
      messageCountIterator,
      onGetMessages
    );
    getPeopleToInvite(
      projectId,
      myUsername,
      mySecret,
      activeChatId,
      setPeopleToInvite
    );
  };

  const onChatLoaderVisible = () => {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `0000+00:00`);
    const newChatCount = chatCount + chatCountIterator;
    // TODO: Edge case at 20 on the dot
    getChatsBefore(
      projectId,
      myUsername,
      mySecret,
      now,
      newChatCount,
      onGetChats
    );
  };

  const onMessageSend = (message: MessageProps) => {
    const newMessages = messages?.concat(message);
    setMessages(newMessages);

    newMessage(
      projectId,
      myUsername,
      mySecret,
      activeChatId,
      message,
      () => {}
    );
  };

  const onInvitePersonClick = (person: PersonProps) => {
    activeChatId &&
      invitePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatId,
        person.username,
        () => onChatCardClick(activeChatId)
      );
  };

  const onRemovePersonClick = (person: PersonProps) => {
    activeChatId &&
      removePerson(
        projectId,
        myUsername,
        mySecret,
        activeChatId,
        person.username,
        () => onChatCardClick(activeChatId)
      );
  };

  const onDeleteChatClick = (chat: ChatProps) => {
    deleteChat(projectId, myUsername, mySecret, chat.id, onDeleteChat);
  };

  return {
    // Data
    chats,
    setChats,
    messages,
    setMessages,
    activeChatId,
    setActiveChatId,
    peopleToInvite,
    setPeopleToInvite,
    // State
    chatCount,
    setChatCount,
    hasMoreChats,
    setHasMoreChats,
    // Simple Events
    onGetChats,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onGetMessages,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    // Larger Events
    onConnect,
    onChatFormSubmit,
    onChatCardClick,
    onChatLoaderVisible,
    onMessageSend,
    onInvitePersonClick,
    onRemovePersonClick,
    onDeleteChatClick,
  };
};
