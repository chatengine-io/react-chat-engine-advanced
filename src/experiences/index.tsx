import React from 'react';

import { useChatEngine } from '../hooks';
import { ChatEngineWindow } from '../components';
import { ChatEngineProps, sanitizeProps } from '../interfaces';
import { Socket } from '../sockets';

const defaultStyle = {
  height: '100vh',
};

export const ChatEngine: React.FC<ChatEngineProps> = (
  props: ChatEngineProps
) => {
  const { projectId, myUsername, mySecret, isDevelopment } = sanitizeProps(
    props
  );
  const state = useChatEngine(projectId, myUsername, mySecret, isDevelopment);
  const {
    onConnect,
    onAuthFail,
    onNewChat,
    onEditChat,
    onDeleteChat,
    onNewMessage,
    onEditMessage,
    onDeleteMessage,
    onChatCardClick,
    onChatFormSubmit,
    onChatLoaderShow,
    onMessageLoaderShow,
    onMessageLoaderHide,
    onBottomMessageShow,
    onBottomMessageHide,
    onMessageFormSubmit,
    onInvitePersonClick,
    onRemovePersonClick,
    onDeleteChatClick,
  } = state;

  return (
    <div>
      <Socket
        {...state}
        // Render functions
        {...props}
        onConnect={() => {
          onConnect();
          props.onConnect && props.onConnect();
        }}
        onAuthFail={() => {
          onAuthFail();
          props.onAuthFail && props.onAuthFail();
        }}
        onNewChat={(chat) => {
          onNewChat(chat);
          props.onNewChat && props.onNewChat(chat);
        }}
        onEditChat={(chat) => {
          onEditChat(chat);
          props.onEditChat && props.onEditChat(chat);
        }}
        onDeleteChat={(chat) => {
          onDeleteChat(chat);
          props.onDeleteChat && props.onDeleteChat(chat);
        }}
        onNewMessage={(chatId, message) => {
          onNewMessage(chatId, message);
          props.onNewMessage && props.onNewMessage(chatId, message);
        }}
        onEditMessage={(chatId, message) => {
          onEditMessage(chatId, message);
          props.onEditMessage && props.onEditMessage(chatId, message);
        }}
        onDeleteMessage={(chatId, message) => {
          onDeleteMessage(chatId, message);
          props.onDeleteMessage && props.onDeleteMessage(chatId, message);
        }}
      />

      <ChatEngineWindow
        {...state}
        onChatCardClick={(chatId) => {
          onChatCardClick(chatId);
          props.onChatCardClick && props.onChatCardClick(chatId);
        }}
        onChatFormSubmit={(title) => {
          onChatFormSubmit(title);
          props.onChatFormSubmit && props.onChatFormSubmit(title);
        }}
        onChatLoaderShow={() => {
          onChatLoaderShow();
          props.onChatLoaderShow && props.onChatLoaderShow();
        }}
        onMessageLoaderShow={() => {
          onMessageLoaderShow();
          props.onMessageLoaderShow && props.onMessageLoaderShow();
        }}
        onMessageLoaderHide={() => {
          onMessageLoaderHide();
          props.onMessageLoaderHide && props.onMessageLoaderHide();
        }}
        onBottomMessageShow={() => {
          onBottomMessageShow();
          props.onBottomMessageShow && props.onBottomMessageShow();
        }}
        onBottomMessageHide={() => {
          onBottomMessageHide();
          props.onBottomMessageHide && props.onBottomMessageHide();
        }}
        onMessageFormSubmit={(message) => {
          onMessageFormSubmit(message);
          props.onMessageFormSubmit && props.onMessageFormSubmit(message);
        }}
        onInvitePersonClick={(person) => {
          onInvitePersonClick(person);
          props.onInvitePersonClick && props.onInvitePersonClick(person);
        }}
        onRemovePersonClick={(person) => {
          onRemovePersonClick(person);
          props.onRemovePersonClick && props.onRemovePersonClick(person);
        }}
        onDeleteChatClick={(chat) => {
          onDeleteChatClick(chat);
          props.onDeleteChatClick && props.onDeleteChatClick(chat);
        }}
        renderChatList={props.renderChatList}
        renderChatForm={props.renderChatForm}
        renderChatCard={props.renderChatCard}
        renderChatFeed={props.renderChatFeed}
        renderChatHeader={props.renderChatHeader}
        renderWelcomeGif={props.renderWelcomeGif}
        renderMessageList={props.renderMessageList}
        renderMessage={props.renderMessage}
        renderMessageForm={props.renderMessageForm}
        renderChatSettings={props.renderChatSettings}
        renderPeopleSettings={props.renderPeopleSettings}
        renderPhotosSettings={props.renderPhotosSettings}
        renderOptionsSettings={props.renderOptionsSettings}
        style={{ ...defaultStyle, ...props.style }}
      />
    </div>
  );
};
