import { data } from '../../../state/data';
import { baseURL } from '../base';

export const sendRefreshToken = async (refreshToken) => {

  try {
    const response = await fetch(`${baseURL}/api/token`, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': refreshToken
        },
        body: JSON.stringify(
          { 'refreshToken': refreshToken })  
      })

    const result = await response.json();

    if ( response.status === 403 ) {
      console.log(result.message);
      return;
    };

    console.log('result sendRefreshToken',result);
    // here we put new access token to localstorage
    data.setBearerToken = result.accessToken;
    const jwtPayload = JSON.parse(window.atob(result.accessToken.split('.')[1]))
    const tokenExpirationTime = jwtPayload.exp * 1000;
    localStorage.setItem('tokenExpirationTime', tokenExpirationTime);
    // here we repeat a previous request

  } catch (err) {
    throw new Error(err.message);
  }
};