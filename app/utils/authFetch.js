import { NetInfo } from 'react-native';
import { getItem } from './asyncStorage';
import config from '../config/';
const newUser = {
  email: 'test@gmail.com',
  password: 'testuser',
};

export async function getAuthToken() {
  const url = `${config.serverDomain}/auth/token`;
  const requestOption = {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  };

  let token = await fetch(url, requestOption);
  token = await token.json();
  return token;
}

export async function fetchWithAuth(url, method = 'get', data = null) {
  const isConnected = await NetInfo.isConnected.fetch();
  if (!isConnected) {
    return () => {};
  }
  const token = await getItem('jwt');
  const requestOption = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      jwt: token,
    },
  };

  if (data) {
    requestOption.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(config.serverDomain + url, requestOption);
    const responseJson = await response.json();
    if (responseJson.requestStatus !== 200) {
      if (config.envMode !== 'production') {
        console.log(' ===== Request Failed =====');
        console.log(response);
      }
      throw new Error(JSON.stringify(responseJson));
    }
    return responseJson;
  } catch (e) {
    throw e;
  }
}
