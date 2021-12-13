import { useState, useEffect, useRef } from 'react';

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
  readMessage,
  getChatsAndMessages,
} from '../actions';

import { animateScroll } from 'react-scroll';

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
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);
  const [isAtChatFeedBottom, setIsAtChatFeedBottom] = useState<boolean>(false);

  // Subscribe to Chat Count
  const chatCountRef = useRef<number>(0);
  chatCountRef.current = chats.length;

  useEffect(() => {
    const chat = chats.find((chat) => chat.id === activeChatId);
    const chatPerson = chat?.people.find(
      (chatPerson) => chatPerson.person.username === myUsername
    );
    if (
      activeChatId &&
      chat?.last_message.id && // If there is a message
      chat.last_message.id !== chatPerson?.last_read &&
      isAtChatFeedBottom
    ) {
      readMessage(
        projectId,
        myUsername,
        mySecret,
        activeChatId,
        chat.last_message.id,
        () => {}
      );
    }
  }, [chats, activeChatId, isAtChatFeedBottom]);

  const onGetChats = (chats: ChatProps[] = []) => {
    setHasMoreChats(chats.length >= chatCountRef.current + chatCountIterator);
    const sortedChats = sortChats(chats);
    setChats(sortedChats);
  };

  const onNewChat = (chat: ChatProps) => {
    const newChats = [chat].concat(chats ? chats : []);
    setChats(newChats);
  };

  const onEditChat = (newChat: ChatProps) => {
    const otherChats = chats
      ? chats.filter((chat) => chat.id !== newChat.id)
      : [];
    const newChats = [newChat].concat(otherChats);
    const sortedChats = sortChats(newChats);
    setChats(sortedChats);
  };

  const onDeleteChat = (oldChat: ChatProps) => {
    const newChats = chats
      ? chats.filter((chat) => chat.id !== oldChat.id)
      : [];
    setChats(newChats);
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
      if (isAtChatFeedBottom) {
        animateScroll.scrollToBottom({
          duration: 333,
          containerId: `ce-message-list-${activeChatId}`,
        });
      }
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
      chatCountRef.current > 0 ? chatCountRef.current : chatCountIterator,
      messages.length > 0 ? messages.length : messageCountIterator,
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
      (chatId, messages) => {
        onGetMessages(chatId, messages);
        animateScroll.scrollToBottom({
          duration: 0,
          containerId: `ce-message-list-${activeChatId}`,
        });
      }
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
    getChatsBefore(
      projectId,
      myUsername,
      mySecret,
      now,
      chatCountRef.current + chatCountIterator,
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

  const onBottomMessageShow = () => {
    setIsAtChatFeedBottom(true);
  };

  const onBottomMessageHide = () => {
    setIsAtChatFeedBottom(false);
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
    hasMoreChats,
    setHasMoreChats,
    isAtChatFeedBottom,
    setIsAtChatFeedBottom,
    // Simple Data Events
    onGetChats,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onGetMessages,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    // Larger Data Events
    onConnect,
    onChatFormSubmit,
    onChatCardClick,
    onChatLoaderVisible,
    onMessageSend,
    onInvitePersonClick,
    onRemovePersonClick,
    onDeleteChatClick,
    // State Events
    onBottomMessageShow,
    onBottomMessageHide,
  };
};
