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
    return result;

  } catch (err) {
    throw new Error(err.message);
  }
};