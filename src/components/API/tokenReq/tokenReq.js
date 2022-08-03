import { data } from '../../../state/data';
import Utils from '../../../utils/Utils';
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
      //logout logic
      Utils.handleLogout();
      // redirect to login page
      Utils.changeUrl('login');
      return;
    };

    // here we put new access token to localstorage
    data.setBearerToken = `Bearer ${result.accessToken}`;
    const jwtPayload = JSON.parse(window.atob(result.accessToken.split('.')[1]))
    const tokenExpirationTime = jwtPayload.exp * 1000;
    localStorage.setItem('tokenExpirationTime', tokenExpirationTime);
    // here we repeat a previous request
    return 'accessTokenChanged';

  } catch (err) {
    throw new Error(err.message);
  }
};