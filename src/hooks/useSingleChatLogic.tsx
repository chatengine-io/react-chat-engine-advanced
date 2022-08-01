import { useState, useEffect, useRef } from 'react';

import { ChatObject, MessageObject, PersonObject } from '../interfaces';
import { getDateTime } from '../components/util/dateTime';

import { getChat, getMessages, newMessage } from '../actions';

import { animateScroll } from 'react-scroll';
import { ChatAuthHeaders } from '../interfaces';

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

export const useSingleChatLogic = (
  projectId: string,
  chatId: string,
  chatAccessKey: string,
  httpUrl?: string
) => {
  const host = httpUrl ? httpUrl : 'https://api.chatengine.io';
  const headers: ChatAuthHeaders = {
    'Public-Key': projectId,
    'Chat-ID': chatId,
    'Access-Key': chatAccessKey,
  };

  // Data
  const [activeChatId, setActiveChatId] = useState<number | undefined>();
  const [chat, setChat] = useState<ChatObject | undefined>();
  const [messages, setMessages] = useState<MessageObject[]>([]);
  const [peopleToInvite, setPeopleToInvite] = useState<PersonObject[]>([]);

  // State
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(false);
  const [isChatFeedAtBottom, setIsChatFeedAtBottom] = useState<boolean>(false);
  const [isChatFeedLoading, setIsChatFeedLoading] = useState<boolean>(true);

  // Subscribe to Chat & Message Count
  const chatCountRef = useRef<number>(0);
  chatCountRef.current = chat ? 1 : 0;
  const messageCountRef = useRef<number>(0);
  messageCountRef.current = messages.length;

  // Fetch data on mount
  const didMountRef = useRef<boolean>(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      fetchSingleChatData();
    }
  }, []);

  async function fetchSingleChatData() {
    getChat(host, headers, chatId, (chat) => {
      setChat(chat);
      onChatCardClick(chat.id);
    });
  }

  async function onEditChat(chat: ChatObject) {
    setChat(chat);
  }

  async function onDeleteChat() {
    setChat(undefined);
    setActiveChatId(undefined);
  }

  async function onGetMessages(chatId: number, messages: MessageObject[]) {
    setHasMoreMessages(
      messages.length >= messageCountRef.current + messageCountIterator
    );
    setMessages(messages);
    setIsChatFeedLoading(false);
    void chatId;
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
  }

  async function onDeleteMessage(chatId: number, oldMessage: MessageObject) {
    if (chatId === activeChatId) {
      const newMessages = messages
        ? messages.filter((message) => message.id !== oldMessage.id)
        : [];
      setMessages(newMessages);
    }
  }

  async function onConnect() {
    fetchSingleChatData();
  }

  async function onAuthFail() {}

  async function onChatCardClick(activeChatId: number) {
    setActiveChatId(activeChatId);

    getMessages(
      host,
      headers,
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
  }

  async function onBottomMessageShow() {
    setIsChatFeedAtBottom(true);
  }

  async function onBottomMessageHide() {
    setIsChatFeedAtBottom(false);
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
  }

  async function onMessageLoaderHide() {}

  async function onIsTyping(id: number, person: PersonObject) {
    void id, person;
  }

  return {
    // Socket Hooks
    onConnect,
    onAuthFail,
    onEditChat,
    onDeleteChat,
    onGetMessages,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    onIsTyping,
    // Auth Data
    projectId,
    chatId,
    chatAccessKey,
    httpUrl,
    wsUrl: httpUrl && httpUrl.replace('http', 'ws'),
    // Chat Data
    activeChatId,
    setActiveChatId,
    chat,
    messages,
    setMessages,
    peopleToInvite,
    setPeopleToInvite,
    // Chat State
    hasMoreChats,
    setHasMoreChats,
    hasMoreMessages,
    setHasMoreMessages,
    isChatFeedAtBottom,
    setIsChatFeedAtBottom,
    isChatFeedLoading,
    setIsChatFeedLoading,
    // Component Hooks
    onChatCardClick,
    onMessageLoaderShow,
    onMessageLoaderHide,
    onBottomMessageShow,
    onBottomMessageHide,
    onMessageFormSubmit,
  };
};
