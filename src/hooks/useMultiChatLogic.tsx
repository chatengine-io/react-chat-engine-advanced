import { useState, useEffect, useRef } from 'react';

import {
  ChatObject,
  MessageObject,
  PersonObject,
  UserAuthHeaders,
} from '../interfaces';
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
} from '../actions';

import { animateScroll } from 'react-scroll';

const chatCountIterator = 20;
const messageCountIterator = 50;

export const sortChats = (chats: ChatObject[]) => {
  return chats.sort((a: ChatObject, b: ChatObject) => {
    const aDate =
      a.last_message && a.last_message.created
        ? getDateTime(a.last_message.created)
        : getDateTime(a.created);
    const bDate =
      b.last_message && b.last_message.created
        ? getDateTime(b.last_message.created)
        : getDateTime(b.created);
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  });
};

export const sortMessages = (messages: MessageObject[]) => {
  return messages.sort((a: MessageObject, b: MessageObject) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });
};

export const useMultiChatLogic = (
  projectId: string,
  username: string,
  secret: string,
  httpUrl?: string
) => {
  const host = httpUrl ? httpUrl : 'https://api.chatengine.io';
  const headers: UserAuthHeaders = {
    'Public-Key': projectId,
    'User-Name': username,
    'User-Secret': secret,
  };

  // Data
  const [activeChatId, setActiveChatId] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatObject[]>([]);
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const [peopleToInvite, setPeopleToInvite] = useState<PersonObject[]>([]);

  // State
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(false);
  const [isChatFeedAtBottom, setIsChatFeedAtBottom] = useState<boolean>(false);
  const [isChatListLoading, setIsChatListLoading] = useState<boolean>(true);
  const [isChatFeedLoading, setIsChatFeedLoading] = useState<boolean>(true);
  const [isChatSettingsLoading, setIsChatSettingsLoading] =
    useState<boolean>(true);
  const [isMobileChatListOpen, setIsMobileChatListOpen] =
    useState<boolean>(false);
  const [isMobileChatSettingsOpen, setIsMobileChatSettingsOpen] =
    useState<boolean>(false);

  // Subscribe to Chat & Message Count
  const chatCountRef = useRef<number>(0);
  chatCountRef.current = chats.length;
  const messageCountRef = useRef<number>(0);
  messageCountRef.current = messages.length;
  const chat = chats.find((chat) => chat.id === activeChatId);

  // Fetch data on mount
  const didMountRef = useRef<boolean>(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      fetchMultiChatData();
    }
  }, []);

  useEffect(() => {
    const chat = chats.find((chat) => chat.id === activeChatId);
    const chatPerson = chat?.people.find(
      (chatPerson) => chatPerson.person.username === username
    );

    if (
      activeChatId &&
      chat?.last_message.id && // If there is a message
      chat.last_message.id !== chatPerson?.last_read &&
      isChatFeedAtBottom
    ) {
      readMessage(host, headers, activeChatId, chat.last_message.id, () => {});
    }
  }, [chats, activeChatId, isChatFeedAtBottom]);

  async function fetchMultiChatData() {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);

    getChatsBefore(
      host,
      headers,
      now,
      chatCountRef.current > 0 ? chatCountRef.current : chatCountIterator,
      (chats) => {
        onGetChats(chats);

        let currentChat = activeChatId;
        if (!activeChatId && chats.length > 0) {
          currentChat = chats[0].id;
        }

        currentChat
          ? onChatCardClick(currentChat)
          : setIsChatFeedLoading(false);
      }
    );
    return;
  }

  async function onGetChats(chats: ChatObject[] = []) {
    setHasMoreChats(chats.length >= chatCountRef.current + chatCountIterator);

    const sortedChats = sortChats(chats);

    setChats(sortedChats);
    setIsChatListLoading(false);
    return;
  }

  async function onNewChat(chat: ChatObject) {
    const newChats = [chat].concat(chats ? chats : []);

    setChats(newChats);
    return;
  }

  async function onEditChat(newChat: ChatObject) {
    const otherChats = chats
      ? chats.filter((chat) => chat.id !== newChat.id)
      : [];
    const newChats = [newChat].concat(otherChats);
    const sortedChats = sortChats(newChats);

    setChats(sortedChats);
    return;
  }

  async function onDeleteChat(oldChat: ChatObject) {
    const newChats = chats
      ? chats.filter((chat) => chat.id !== oldChat.id)
      : [];

    setChats(newChats);

    if (newChats.length > 0 && activeChatId === oldChat.id)
      onChatCardClick(newChats[0].id);
    return;
  }

  async function onGetMessages(chatId: number, messages: MessageObject[]) {
    setHasMoreMessages(
      messages.length >= messageCountRef.current + messageCountIterator
    );
    setMessages(messages);

    void chatId;
    return;
  }

  async function onNewMessage(chatId: number, newMessage: MessageObject) {
    if (activeChatId === chatId) {
      const otherMessages = messages
        ? messages.filter((message) => message.created !== newMessage.created)
        : [];
      const newMessages = otherMessages.concat(newMessage);
      const sortedMessages = sortMessages(newMessages);

      setMessages(sortedMessages);
      if (isChatFeedAtBottom) {
        animateScroll.scrollToBottom({
          duration: 333,
          containerId: `ce-message-list-${activeChatId}`,
        });
      }
    }
    return;
  }

  async function onEditMessage(chatId: number, newMessage: MessageObject) {
    if (chatId === activeChatId) {
      const otherMessages = messages
        ? messages.filter((message) => message.id !== newMessage.id)
        : [];
      const newMessages = [newMessage].concat(otherMessages);
      const sortedMessages = sortMessages(newMessages);
      setMessages(sortedMessages);
    }
    return;
  }

  async function onDeleteMessage(chatId: number, oldMessage: MessageObject) {
    if (chatId === activeChatId) {
      const newMessages = messages
        ? messages.filter((message) => message.id !== oldMessage.id)
        : [];
      setMessages(newMessages);
    }
    return;
  }

  async function onConnect() {
    fetchMultiChatData();
    return;
  }

  async function onAuthFail() {}

  async function onChatFormSubmit(title: string) {
    newChat(host, headers, title, (chat) => {
      onNewChat(chat);
      onChatCardClick(chat.id);
    });
    return;
  }

  async function onChatCardClick(newActiveChatId: number) {
    if (newActiveChatId !== activeChatId) {
      setIsChatFeedLoading(true);
      setIsChatSettingsLoading(true);
    }

    setActiveChatId(newActiveChatId);
    setIsMobileChatListOpen(false);

    getMessages(
      host,
      headers,
      newActiveChatId,
      messageCountIterator,
      (chatId, messages) => {
        onGetMessages(chatId, messages);

        setIsChatFeedLoading(false);
        setIsChatSettingsLoading(false);

        animateScroll.scrollToBottom({
          duration: 0,
          containerId: `ce-message-list-${activeChatId}`,
        });
      }
    );

    getPeopleToInvite(host, headers, newActiveChatId, setPeopleToInvite);
    return;
  }

  async function onChatLoaderShow() {
    const now = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `0000+00:00`);

    getChatsBefore(
      host,
      headers,
      now,
      chatCountRef.current + chatCountIterator,
      onGetChats
    );
    return;
  }

  async function onMessageFormSubmit(message: MessageObject) {
    const newMessages = messages?.concat(message);
    setMessages(newMessages);

    newMessage(host, headers, activeChatId, message, () => {});

    setTimeout(() => {
      animateScroll.scrollToBottom({
        duration: 333,
        containerId: `ce-message-list-${activeChatId}`,
      });
    }, 100);
    return;
  }

  async function onInvitePersonClick(person: PersonObject) {
    activeChatId &&
      invitePerson(host, headers, activeChatId, person.username, () =>
        onChatCardClick(activeChatId)
      );
  }

  async function onRemovePersonClick(person: PersonObject) {
    activeChatId &&
      removePerson(host, headers, activeChatId, person.username, () =>
        onChatCardClick(activeChatId)
      );
    return;
  }

  async function onDeleteChatClick(chat: ChatObject) {
    deleteChat(host, headers, chat.id, onDeleteChat);
    return;
  }

  async function onBottomMessageShow() {
    setIsChatFeedAtBottom(true);
    return;
  }

  async function onBottomMessageHide() {
    setIsChatFeedAtBottom(false);
    return;
  }

  async function onMessageLoaderShow() {
    const scrollContainerId = `ce-message-list-${activeChatId}`;
    const messageListId = `ce-message-list-content-${activeChatId}`;

    const currentElement = document.getElementById(messageListId);
    let currentHeight = currentElement ? currentElement.clientHeight : 0;

    activeChatId &&
      getMessages(
        host,
        headers,
        activeChatId,
        messageCountRef.current + messageCountIterator,
        (chatId, messages) => {
          onGetMessages(chatId, messages);

          setTimeout(() => {
            const element = document.getElementById(messageListId);
            if (element) {
              animateScroll.scrollTo(element.clientHeight - currentHeight, {
                duration: 333,
                containerId: scrollContainerId,
              });
            }
          }, 1000);
        }
      );
    return;
  }

  async function onMessageLoaderHide() {
    return;
  }

  async function onIsTyping(id: number, person: PersonObject) {
    void id, person;
    return;
  }

  async function onMobileChatListClick() {
    setIsMobileChatListOpen(true);
    return;
  }

  async function onMobileChatSettingsClick() {
    setIsMobileChatSettingsOpen(true);
    return;
  }

  async function onCloseMobileChatSettingsClick() {
    setIsMobileChatSettingsOpen(false);
    return;
  }

  return {
    // Socket Hooks
    onConnect,
    onAuthFail,
    onGetChats,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onGetMessages,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    onIsTyping,
    // Auth Data
    projectId,
    username,
    // file deepcode ignore HardcodedNonCryptoSecret: <not a secret>
    secret,
    httpUrl,
    wsUrl: httpUrl && httpUrl.replace('http', 'ws'),
    // Chat Data
    chats,
    setChats,
    messages,
    setMessages,
    peopleToInvite,
    setPeopleToInvite,
    // Chat State
    activeChatId,
    setActiveChatId,
    chat,
    hasMoreChats,
    setHasMoreChats,
    hasMoreMessages,
    setHasMoreMessages,
    isChatFeedAtBottom,
    setIsChatFeedAtBottom,
    isChatListLoading,
    setIsChatListLoading,
    isChatFeedLoading,
    setIsChatFeedLoading,
    isChatSettingsLoading,
    setIsChatSettingsLoading,
    isMobileChatListOpen,
    setIsMobileChatListOpen,
    isMobileChatSettingsOpen,
    setIsMobileChatSettingsOpen,
    // Component Hooks
    onChatFormSubmit,
    onChatCardClick,
    onChatLoaderShow,
    onMessageLoaderShow,
    onMessageLoaderHide,
    onBottomMessageShow,
    onBottomMessageHide,
    onMessageFormSubmit,
    onInvitePersonClick,
    onRemovePersonClick,
    onDeleteChatClick,
    onMobileChatListClick,
    onMobileChatSettingsClick,
    onCloseMobileChatSettingsClick,
  };
};
