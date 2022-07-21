import './LoginPage.scss';

const LoginPage = {
  render: async () => {
    const view = `
      <div class="login-page-div">
        LoginPage
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('LoginPage rendered, now we can start some logic part');
  },
};

export default LoginPage;
