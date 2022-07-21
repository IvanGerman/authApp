import './RegistrationPage.scss';

const RegistrationPage = {
  render: async () => {
    const view = `
      <div class="registration-page-div">
      RegistrationPage
      <br><br>
  <label for="regEmail">Email:</label>
  <input type="text" id="regEmail" name="regEmail"><br><br>
  <label for="regPassword">Password:</label>
  <input type="text" id="regPassword" name="regPassword"><br><br>
  <input type="button" value="Submit" id="regBtn">

      </div>
    `;
    return view;
  },
  
  after_render: () => {

    console.log('RegistrationPage rendered, now we can start some logic part');
    
    const regBtn = document.querySelector('#regBtn');
    const regEmail = document.querySelector('#regEmail');
    const regPassword = document.querySelector('#regPassword');

    function myFunc() {
      console.log('post request sent', regEmail.value, regPassword.value);
      fetch('http://localhost:5000/api/auth/register', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {'email': regEmail.value,
            'password': regPassword.value
          }) // body data type must match "Content-Type" header
      });
    };

    regBtn.addEventListener('click', myFunc);

  },
};

export default RegistrationPage;
