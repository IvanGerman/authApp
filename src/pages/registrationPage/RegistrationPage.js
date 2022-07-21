import './RegistrationPage.scss';

const RegistrationPage = {
  render: async () => {
    const view = `
      <div class="registration-page-div">
      RegistrationPage
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('RegistrationPage rendered, now we can start some logic part');
  },
};

export default RegistrationPage;
