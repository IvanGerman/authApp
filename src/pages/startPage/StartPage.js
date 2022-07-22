import { data } from '../../state/data';
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

    const booksLink = document.querySelector('#booksLink');
    //to change, it adds more and more eventlisteners
    booksLink.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('booksLink');
      if ( data.isUserAuth === true ) {
       // document.URL is the current url
      var url_ob = new URL(document.URL);
      url_ob.hash = 'books';

      // new url
      var new_url = url_ob.href;

      // change the current url
      document.location.href = new_url;
      }
    })

  },
};

export default StartPage;
