import './BooksPage.scss';

const BooksPage = {
  render: async () => {
    const view = `
      <div class="books-page-div">
        BooksPage
        <br><br>
        <p>Get books:</p>
        <input type="button" value="get books" id="getBooksBtn">
        <br><br>
        <p for="postBooks">Post book:</p>
        <input type="text" id="postBook" name="postBook" placeholder="book name">
        <br><br>
        <input type="button" value="Submit" id="postBookBtn">
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('BooksPage rendered, now we can start some logic part');

    const getBooksBtn = document.querySelector('#getBooksBtn');
    const postBookInput = document.querySelector('#postBook');
    const postBookBtn = document.querySelector('#postBookBtn');

    async function myGetFunc() {
      console.log('get request from booksPage sent');
      await fetch('http://localhost:5000/api/books', {
        method: 'GET', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjU4NDc2MTk4LCJleHAiOjE2NTg0Nzk3OTh9.gg69DRe7mo8DF32qZmMeIza5t7EAe9AL5biXdkdShEM'
        }
      })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    };

    getBooksBtn.addEventListener('click', myGetFunc);


    async function myPostFunc() {
      console.log('post request from booksPage sent', postBookInput.value);
      await fetch('http://localhost:5000/api/books', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjU4NDc2MTk4LCJleHAiOjE2NTg0Nzk3OTh9.gg69DRe7mo8DF32qZmMeIza5t7EAe9AL5biXdkdShEM'
        },
        body: JSON.stringify(
          {'name': postBookInput.value,
          }) // body data type must match "Content-Type" header
      })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    };

    postBookBtn.addEventListener('click', myPostFunc);
  },
};

export default BooksPage;
