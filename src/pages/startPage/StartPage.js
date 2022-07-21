import './StartPage.scss';

const StartPage = {
  render: async () => {
    const view = `
      <div class="start-page-div">
        Startpage
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('startPage rendered, now we can start some logic part');
  },
};

export default StartPage;
