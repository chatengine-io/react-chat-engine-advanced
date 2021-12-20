export const DEVELOPMENT =
  window.location.hostname.indexOf('chatengine') === -1;

export const ROOT_URL = DEVELOPMENT
  ? 'http://127.0.0.1:8000/'
  : 'https://api.chatengine.io/';

export const PROJECT_ID = DEVELOPMENT
  ? '1ed59673-1fd6-46ed-9eb9-56239a6a4f82'
  : '8a1f9edb-a05a-4b55-9d6e-ec399a38f5a9';
export const USER_NAME = DEVELOPMENT ? 'Adam_La_Morre' : '';
export const USER_SECRET = DEVELOPMENT ? 'pass1234' : '';

export const CHAT_ID = DEVELOPMENT ? 289 : 0;
export const CHAT_ACCESS_KEY = DEVELOPMENT
  ? 'ca-0d21f8cb-b884-4a8b-9e2e-a2acbdbc3792'
  : '';

// Staging
// export const DEVELOPMENT = false
// export const ROOT_URL = 'https://api.chatengine.dev/'
// export const PROJECT_ID = 'aafaed6f-f0c4-4c9a-af5e-227eca8cf5a1'
// export const USER_NAME = ''
// export const USER_SECRET =  ''
// export const CHAT_ID = 0
// export const CHAT_ACCESS_KEY = ''
