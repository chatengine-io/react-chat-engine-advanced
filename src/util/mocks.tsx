import {
  AttachmentProps,
  ChatProps,
  MessageProps,
  PersonProps,
} from './interfaces';

export const adam: PersonProps = {
  username: 'adam_lamorre',
  first_name: 'Adam',
  last_name: 'La Morre',
  avatar:
    'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  custom_json: '',
  is_online: true,
};

export const bob: PersonProps = {
  username: 'bob_baker',
  first_name: 'Bob',
  last_name: 'Baker',
  avatar: null,
  custom_json: '',
  is_online: true,
};

export const cam: PersonProps = {
  username: 'cam_newton',
  first_name: 'Cam',
  last_name: 'Newton',
  avatar:
    'https://static01.nyt.com/images/2020/03/24/sports/24nfl-cam1/24nfl-cam1-mediumSquareAt3X.jpg',
  custom_json: '',
  is_online: true,
};

export const imageAttachment: AttachmentProps = {
  id: 10,
  file:
    'https://chat-engine-assets.s3.amazonaws.com/tutorials/nextjs-chat-tutorial/thumb.png',
  created: '2021-08-03T00:16:52.633778Z',
};

export const fileAttachment: AttachmentProps = {
  id: 11,
  file: 'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
  created: '2021-08-03T00:16:59.633778Z',
};

export const message: MessageProps = {
  id: 1000,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [],
  sender_username: 'Adam_La_Morre',
  text: '<p>Hello there world!</p>',
  custom_json: '',
  sender: adam,
};

export const messageByBob: MessageProps = {
  id: 1001,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Greetings, how are you?</p>',
  custom_json: '',
  sender: bob,
};

export const messageTwoByBob: MessageProps = {
  id: 1002,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Looks like you are working on NextJS!</p>',
  custom_json: '',
  sender: bob,
};

export const messagePlusAttachments: MessageProps = {
  id: 1003,
  created: '2021-07-14 01:18:24.567443+00:00',
  attachments: [imageAttachment, fileAttachment],
  sender_username: 'Adam_La_Morre',
  text: '<p>Hey check out this image and MP3 file!</p>',
  custom_json: '',
  sender: adam,
};

export const onePersonChat: ChatProps = {
  id: 201,
  title: 'First Chat ☝️',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      ...adam,
      last_read: 1000,
      chat_updated: '',
    },
  ],
  last_message: message,
};

export const chatWithReads: ChatProps = {
  id: 201,
  title: 'First Chat ☝️',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      ...adam,
      last_read: 1000,
      chat_updated: '',
    },
    {
      ...bob,
      last_read: 1000,
      chat_updated: '',
    },
  ],
  last_message: message,
};

export const threePersonChat: ChatProps = {
  id: 207,
  title: 'Friends!',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      ...adam,
      last_read: 1000,
      chat_updated: '',
    },
    {
      ...bob,
      last_read: 1000,
      chat_updated: '',
    },
    {
      ...cam,
      last_read: 1000,
      chat_updated: '',
    },
  ],
  last_message: message,
};

export const directMessageChat: ChatProps = {
  id: 203,
  title: 'Direct Message w/ Adam',
  is_direct_chat: true,
  created: '2021-01-26T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      ...adam,
      last_read: 1000,
      chat_updated: '',
    },
    {
      ...bob,
      last_read: 1000,
      chat_updated: '',
    },
  ],
  last_message: {
    created: '',
    attachments: [],
    sender_username: '',
    text: 'hello',
    custom_json: '',
  },
};

export const chats: ChatProps[] = [
  {
    id: 201,
    title: 'First Chat ☝️',
    is_direct_chat: false,
    created: '2021-01-28T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [
      {
        ...adam,
        last_read: 1000,
        chat_updated: '',
      },
    ],
    last_message: message,
  },
  {
    id: 202,
    title: 'Chat Two ✌️ ',
    is_direct_chat: false,
    created: '2021-01-27T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
  {
    id: 203,
    title: 'Direct Message w/ Adam',
    is_direct_chat: true,
    created: '2021-01-26T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [],
    last_message: {
      created: '',
      attachments: [],
      sender_username: '',
      text: '',
      custom_json: '',
    },
  },
];
