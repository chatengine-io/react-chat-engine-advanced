import { useState, useRef } from 'react';

import { ChatProps, MessageProps, PersonProps } from '../interfaces';
import { getDateTime } from '../components/util/dateTime';

import { getHost, getChat, getMessages, newMessage } from '../actions';

import { animateScroll } from 'react-scroll';
import { ChatAuthHeaders } from '../actions/interfaces';

const messageCountIterator = 50;

export const sortChats = (chats: ChatProps[]) => {
  return chats.sort((a: ChatProps, b: ChatProps) => {
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

export const sortMessages = (messages: MessageProps[]) => {
  return messages.sort((a: MessageProps, b: MessageProps) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });
};

export const useChatHooks = (
  projectId: string,
  chatId: string,
  chatAccessKey: string,
  isDevelopment?: boolean
) => {
  const host = getHost(isDevelopment);
  const headers: ChatAuthHeaders = {
    'Public-Key': projectId,
    'Chat-ID': chatId,
    'Access-Key': chatAccessKey,
  };

  // Data
  const [activeChatId, setActiveChatId] = useState<number | undefined>();
  const [chat, setChat] = useState<ChatProps | undefined>();
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [peopleToInvite, setPeopleToInvite] = useState<PersonProps[]>([]);

  // State
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(false);
  const [isChatFeedAtBottom, setIsChatFeedAtBottom] = useState<boolean>(false);

  // Subscribe to Chat & Message Count
  const chatCountRef = useRef<number>(0);
  chatCountRef.current = chat ? 1 : 0;
  const messageCountRef = useRef<number>(0);
  messageCountRef.current = messages.length;

  const onEditChat = (chat: ChatProps) => {
    setChat(chat);
  };

  const onDeleteChat = () => {
    setChat(undefined);
    setActiveChatId(undefined);
  };

  const onGetMessages = (chatId: number, messages: MessageProps[]) => {
    setHasMoreMessages(
      messages.length >= messageCountRef.current + messageCountIterator
    );
    setMessages(messages);

    void chatId;
  };

  const onNewMessage = (chatId: number, newMessage: MessageProps) => {
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
    getChat(host, headers, chatId, (chat) => {
      setChat(chat);
      onChatCardClick(chat.id);
    });
  };

  const onAuthFail = () => {};

  const onChatCardClick = (activeChatId: number) => {
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
  };

  const onMessageFormSubmit = (message: MessageProps) => {
    const newMessages = messages?.concat(message);
    setMessages(newMessages);

    newMessage(host, headers, activeChatId, message, () => {});
  };

  const onBottomMessageShow = () => {
    setIsChatFeedAtBottom(true);
  };

  const onBottomMessageHide = () => {
    setIsChatFeedAtBottom(false);
  };

  const onMessageLoaderShow = () => {
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
  };

  const onMessageLoaderHide = () => {};

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
    // Auth Data
    projectId,
    chatId,
    chatAccessKey,
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
    // Component Hooks
    onChatCardClick,
    onMessageLoaderShow,
    onMessageLoaderHide,
    onBottomMessageShow,
    onBottomMessageHide,
    onMessageFormSubmit,
  };
};
