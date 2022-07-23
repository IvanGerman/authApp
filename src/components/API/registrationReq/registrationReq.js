import { baseURL } from '../base';

export const sendRegistrationData = async (email, password) => {

  try {
    const response = await fetch(`${baseURL}/api/auth/register`, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {'email': email,
            'password': password
          }) // body data type must match "Content-Type" header
      })

    const result = await response.json();

    if ( response.status === 409 ) {
      console.log(result.message);
      alert(result.message);
      return;
    };

    console.log(`User with data ${JSON.stringify(result)} successfully registered`);
    alert('Registration completed successfully');
    return result;

  } catch (err) {
    throw new Error(err.message);
  }
};