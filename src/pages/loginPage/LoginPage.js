import { data } from '../../state/data';
import './LoginPage.scss';

const LoginPage = {
  render: async () => {
    const view = `
      <div class="login-page-div">
        LoginPage
        <br><br>
        <label for="loginEmail">Email:</label>
        <input type="text" id="loginEmail" name="loginEmail"><br><br>
        <label for="loginPassword">Password:</label>
        <input type="text" id="loginPassword" name="loginPassword"><br><br>
        <input type="button" value="Submit" id="loginBtn">
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('LoginPage rendered, now we can start some logic part');

    const loginBtn = document.querySelector('#loginBtn');
    const loginEmail = document.querySelector('#loginEmail');
    const loginPassword = document.querySelector('#loginPassword');

    async function myFunc() {
      console.log('post request from loginPage sent', loginEmail.value, loginPassword.value);
      await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {'email': loginEmail.value,
            'password': loginPassword.value
          }) // body data type must match "Content-Type" header
      })
      .then((response) => { 
        if (response.status === 200) {
          data.setIsUserAuth = true;
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        data.setBearerToken = responseData.token;

        // here we store refreshToken in localStorage
        localStorage.setItem('refreshToken', responseData.refreshToken);

        // here we store expiration time of the token in  localStorage
        
        const jwtPayload = JSON.parse(window.atob(responseData.token.split('.')[1]))
        const tokenExpirationTime = jwtPayload.exp * 1000;
        localStorage.setItem('tokenExpirationTime', tokenExpirationTime);      
      });
    };

    loginBtn.addEventListener('click', myFunc);
  },
};

export default LoginPage;
