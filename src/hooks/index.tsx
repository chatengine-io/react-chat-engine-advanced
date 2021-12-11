import { useState } from 'react';

import { ChatProps, MessageProps, PersonProps } from '../interfaces';
import { getDateTime } from '../components/util/dateTime';

const chatCountIterator = 20;

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

export const useChatEngine = () => {
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

  const onChatCardClick = (activeChatId: number) => {
    setActiveChatId(activeChatId);
    // getMessages(
    //   projectId,
    //   myUsername,
    //   mySecret,
    //   chatId,
    //   messageCountIterator,
    //   onGetMessages
    // );
    // getPeopleToInvite(
    //   projectId,
    //   myUsername,
    //   mySecret,
    //   chatId,
    //   setPeopleToInvite
    // );
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
    // Events
    onGetChats,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onChatCardClick,
    onGetMessages,
    onNewMessage,
  };
};
