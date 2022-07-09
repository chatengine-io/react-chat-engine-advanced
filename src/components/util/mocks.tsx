import {
  AttachmentObject,
  ChatObject,
  MessageObject,
  PersonObject,
} from '../../interfaces';

export const adam: PersonObject = {
  username: 'adam_lamorre',
  email: null,
  secret: 'Pass1234!',
  first_name: 'Adam',
  last_name: 'La Morre',
  avatar:
    'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  custom_json: '',
  is_online: true,
};

export const bob: PersonObject = {
  username: 'bob_baker',
  secret: 'Pass1234!',
  email: null,
  first_name: 'Bob',
  last_name: 'Baker',
  avatar: null,
  custom_json: '',
  is_online: true,
};

export const cam: PersonObject = {
  username: 'cam_newton',
  secret: 'Pass1234!',
  email: null,
  first_name: 'Cam',
  last_name: 'Newton',
  avatar:
    'https://static01.nyt.com/images/2020/03/24/sports/24nfl-cam1/24nfl-cam1-mediumSquareAt3X.jpg',
  custom_json: '',
  is_online: true,
};

export const imageAttachment: AttachmentObject = {
  id: 10,
  file:
    'https://chat-engine-assets.s3.amazonaws.com/tutorials/nextjs-chat-tutorial/thumb.png',
  created: '2021-08-03T00:16:52.633778Z',
};

export const fileAttachment: AttachmentObject = {
  id: 11,
  file: 'https://chat-engine-assets.s3.amazonaws.com/click.mp3',
  created: '2021-08-03T00:16:59.633778Z',
};

export const imageAttachment2: AttachmentObject = {
  id: 12,
  file: 'https://chat-engine-assets.s3.amazonaws.com/tutorials/my-face-min.png',
  created: '2021-08-03T00:16:59.633778Z',
};

const message1001Created = '2021-07-14 01:01:00.000000+00:00';
export const message1001: MessageObject = {
  id: 1001,
  created: message1001Created,
  attachments: [],
  sender_username: 'Adam_La_Morre',
  text: '<p>First message</p>',
  custom_json: '',
  sender: adam,
};

const message1002Created = '2021-07-14 01:02:00.000000+00:00';
export const messageByBob1002: MessageObject = {
  id: 1002,
  created: message1002Created,
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Second message</p>',
  custom_json: '',
  sender: bob,
};

const message1003Created = '2021-07-14 01:03:00.000000+00:00';
export const messageTwoByBob1003: MessageObject = {
  id: 1003,
  created: message1003Created,
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Third message</p>',
  custom_json: '',
  sender: bob,
};

const message1004Created = '2021-07-14 01:04:00.000000+00:00';
export const messagePlusAttachments1004: MessageObject = {
  id: 1004,
  created: message1004Created,
  attachments: [imageAttachment, fileAttachment],
  sender_username: 'Adam_La_Morre',
  text: '<p>Fouth and final message</p>',
  custom_json: '',
  sender: adam,
};

export const onePersonChat: ChatObject = {
  id: 201,
  title: 'First Chat ☝️',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      person: adam,
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
  admin: adam,
};

export const chatWithReads: ChatObject = {
  id: 201,
  title: 'First Chat ☝️',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      person: adam,
      last_read: 1001,
      chat_updated: '',
    },
    {
      person: bob,
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
  admin: adam,
};

export const threePersonChat: ChatObject = {
  id: 207,
  title: 'Friends!',
  is_direct_chat: false,
  created: '2021-01-28T02:41:48.826706Z',
  custom_json: {},
  attachments: [
    imageAttachment,
    imageAttachment,
    imageAttachment2,
    fileAttachment,
  ],
  people: [
    {
      person: adam,
      last_read: 1001,
      chat_updated: '',
    },
    {
      person: bob,
      last_read: 1001,
      chat_updated: '',
    },
    {
      person: cam,
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
  admin: adam,
};

export const directMessageChat: ChatObject = {
  id: 203,
  title: 'Direct Message w/ Adam',
  is_direct_chat: true,
  created: '2021-01-26T02:41:48.826706Z',
  custom_json: {},
  attachments: [],
  people: [
    {
      person: adam,
      last_read: 1001,
      chat_updated: '',
    },
    {
      person: bob,
      last_read: 1001,
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
  admin: adam,
};

export const messages: MessageObject[] = [
  message1001,
  messageByBob1002,
  messageTwoByBob1003,
  messagePlusAttachments1004,
];

export const chats: ChatObject[] = [
  {
    id: 201,
    title: 'First Chat ☝️',
    is_direct_chat: false,
    created: '2021-01-28T02:41:48.826706Z',
    custom_json: {},
    attachments: [],
    people: [
      {
        person: adam,
        last_read: 1001,
        chat_updated: '',
      },
    ],
    last_message: message1001,
    admin: adam,
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
    admin: adam,
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
    admin: adam,
  },
];
