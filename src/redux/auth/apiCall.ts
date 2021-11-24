import { API_CONFIG } from '@services/apiConfig';
import withQuery from 'with-query';
import Config from 'react-native-config';
import { GetUserParams, LogginPayload } from './types';

export async function requestLogin({ username, password, fcmToken }: LogginPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      fcmToken,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.LOGIN}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('login - Error: ', error);
    throw error;
  }
}

export async function getUserRequest({ id }: GetUserParams): Promise<any> {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.GET_USER}/${id}`);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    console.log(`🛠 LOG: 🚀 --> ~ file: apiCall.ts ~ line 21 ~ requestLogin ~ url`, url);
    console.log(`🛠 LOG: 🚀 --> ---------------------------------------------------------------------`);
    const response = await fetch(url, data);
    return response.json();
  } catch (error) {
    console.error('login - Error: ', error);
    throw error;
  }
}
