import env from '@env';
import { API_CONFIG } from '@services/apiConfig';
import withQuery from 'with-query';

export async function requestLogin({ limit }): Promise<any> {
  try {
    const url = withQuery(`${env.API_BASE}/${API_CONFIG.LOGIN}`, {
      limit,
    });

    const response = await fetch(url);

    return response.json();
  } catch (error) {
    console.error('getAllFilms - Error: ', error);
    throw error;
  }
}
