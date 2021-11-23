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

export const message1001: MessageProps = {
  id: 1001,
  created: '2021-07-14 01:01:00.000000+00:00',
  attachments: [],
  sender_username: 'Adam_La_Morre',
  text: '<p>Message 1001</p>',
  custom_json: '',
  sender: adam,
};

export const messageByBob1002: MessageProps = {
  id: 1002,
  created: '2021-07-14 01:02:00.000000+00:00',
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Message 1002</p>',
  custom_json: '',
  sender: bob,
};

export const messageTwoByBob1003: MessageProps = {
  id: 1003,
  created: '2021-07-14 01:03:00.000000+00:00',
  attachments: [],
  sender_username: 'bob_baker',
  text: '<p>Message 1003</p>',
  custom_json: '',
  sender: bob,
};

export const messagePlusAttachments1004: MessageProps = {
  id: 1004,
  created: '2021-07-14 01:04:00.000000+00:00',
  attachments: [imageAttachment, fileAttachment],
  sender_username: 'Adam_La_Morre',
  text: '<p>Message 1004</p>',
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
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
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
      last_read: 1001,
      chat_updated: '',
    },
    {
      ...bob,
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
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
      last_read: 1001,
      chat_updated: '',
    },
    {
      ...bob,
      last_read: 1001,
      chat_updated: '',
    },
    {
      ...cam,
      last_read: 1001,
      chat_updated: '',
    },
  ],
  last_message: message1001,
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
      last_read: 1001,
      chat_updated: '',
    },
    {
      ...bob,
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
        last_read: 1001,
        chat_updated: '',
      },
    ],
    last_message: message1001,
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
