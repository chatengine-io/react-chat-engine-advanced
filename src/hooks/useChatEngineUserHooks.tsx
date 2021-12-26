import { useState, useEffect, useRef } from 'react';

import { ChatProps, MessageProps, PersonProps } from '../interfaces';
import { getDateTime } from '../components/util/dateTime';

import {
  getHost,
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
import { UserAuthHeaders } from '../actions/interfaces';

const chatCountIterator = 20;
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

export const useChatEngineUserHooks = (
  projectId: string,
  myUsername: string,
  mySecret: string,
  isDevelopment?: boolean
) => {
  const host = getHost(isDevelopment);
  const headers: UserAuthHeaders = {
    'Public-Key': projectId,
    'User-Name': myUsername,
    'User-Secret': mySecret,
  };

  // Data
  const [activeChatId, setActiveChatId] = useState<number | undefined>();
  const [chats, setChats] = useState<ChatProps[]>([]);
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [peopleToInvite, setPeopleToInvite] = useState<PersonProps[]>([]);

  // State
  const [hasMoreChats, setHasMoreChats] = useState<boolean>(false);
  const [hasMoreMessages, setHasMoreMessages] = useState<boolean>(false);
  const [isChatFeedAtBottom, setIsChatFeedAtBottom] = useState<boolean>(false);

  // Subscribe to Chat & Message Count
  const chatCountRef = useRef<number>(0);
  chatCountRef.current = chats.length;
  const messageCountRef = useRef<number>(0);
  messageCountRef.current = messages.length;
  const chat = chats.find((chat) => chat.id === activeChatId);

  useEffect(() => {
    const chat = chats.find((chat) => chat.id === activeChatId);
    const chatPerson = chat?.people.find(
      (chatPerson) => chatPerson.person.username === myUsername
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
        currentChat && onChatCardClick(currentChat);
      }
    );
  };

  const onAuthFail = () => {};

  const onChatFormSubmit = (title: string) => {
    newChat(host, headers, title, (chat) => {
      onNewChat(chat);
      onChatCardClick(chat.id);
    });
  };

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

    getPeopleToInvite(host, headers, activeChatId, setPeopleToInvite);
  };

  const onChatLoaderShow = () => {
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
  };

  const onMessageFormSubmit = (message: MessageProps) => {
    const newMessages = messages?.concat(message);
    setMessages(newMessages);

    newMessage(host, headers, activeChatId, message, () => {});
  };

  const onInvitePersonClick = (person: PersonProps) => {
    activeChatId &&
      invitePerson(host, headers, activeChatId, person.username, () =>
        onChatCardClick(activeChatId)
      );
  };

  const onRemovePersonClick = (person: PersonProps) => {
    activeChatId &&
      removePerson(host, headers, activeChatId, person.username, () =>
        onChatCardClick(activeChatId)
      );
  };

  const onDeleteChatClick = (chat: ChatProps) => {
    deleteChat(host, headers, chat.id, onDeleteChat);
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
    // Auth
    socketHooks: {
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
    },
    chatAuth: {
      projectId,
      myUsername,
      mySecret,
    },
    chatData: {
      chats,
      setChats,
      messages,
      setMessages,
      activeChatId,
      setActiveChatId,
      chat,
      peopleToInvite,
      setPeopleToInvite,
    },
    chatState: {
      hasMoreChats,
      setHasMoreChats,
      hasMoreMessages,
      setHasMoreMessages,
      isChatFeedAtBottom,
      setIsChatFeedAtBottom,
    },
    chatHooks: {
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
    },
  };
};
