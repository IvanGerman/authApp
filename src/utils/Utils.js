import { sendRefreshToken } from "../components/API/tokenReq/tokenReq";
import { data } from "../state/data";


const loginLogoutA = document.querySelector('#login-logout-a');

const Utils = {
  parseRequestURL: () => {
    const url = document.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: null,
    };
    request.resource = r[0];
    return request;
  },
  checkTokenExpTime: (tokenExpTime) => {
    if ( tokenExpTime > Date.now() ) {
      console.log('token is alive');
      return 'alive';
    } else {
      console.log('token is expired');
      return 'expired';
    }
  },
  getNewAccessToken: async () =>  { 
    let tokenStatus = Utils.checkTokenExpTime(localStorage.getItem('tokenExpirationTime'));
        if ( tokenStatus === 'expired') {
          const refreshToken = localStorage.getItem('refreshToken');
          // post request to api/token for new access token
          const result = await sendRefreshToken (refreshToken);
          if ( result !== 'accessTokenChanged' ) { 
            console.log('new access token was not received');
            return };
        }
  },
  handleLogout: () => {
    console.log('Logout');
    data.setIsUserAuth = false;
    loginLogoutA.innerHTML = 'Login';
    loginLogoutA.removeEventListener('click', Utils.handleLogout);
  },
  changeUrl: (hash) => {
    let url_ob = new URL(document.URL);
    url_ob.hash = hash;
    // new url
    let new_url = url_ob.href;
    // change the current url
    document.location.href = new_url;
  }
};

export default Utils;
