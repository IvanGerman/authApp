import './BooksPage.scss';

const BooksPage = {
  render: async () => {
    const view = `
      <div class="books-page-div">
        BooksPage
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('BooksPage rendered, now we can start some logic part');
  },
};

export default BooksPage;
