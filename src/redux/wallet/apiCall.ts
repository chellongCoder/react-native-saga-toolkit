import { API_CONFIG } from '@services/apiConfig';
import withQuery from 'with-query';
import Config from 'react-native-config';
import { AddWalletPayload, GetWalletPayload, PassPhrasePayload } from './types';

export async function requestGeneratePassphrase({ length }: PassPhrasePayload): Promise<any> {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.MNEMONIC}/${length}`);
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

export async function getWallet({ userId }: GetWalletPayload): Promise<any> {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.WALLETS}/${userId}`);
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

export async function addWallet({ mnemonic, name, userId }: AddWalletPayload): Promise<any> {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      mnemonic,
      name,
      userId,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const url = withQuery(`${Config.API_URL}/${API_CONFIG.WALLETS}`);
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
