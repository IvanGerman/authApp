import { data } from '../../state/data';
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
        <br><br>
        <p for="deleteBooks">Delete book:</p>
        <input type="text" id="deleteBook" name="deleteBook" placeholder="book id">
        <br><br>
        <input type="button" value="Submit" id="deleteBookBtn">
        <br><br>
        <p for="updateBooks">Update book:</p>
        <input type="text" id="updateBookInput1" name="updateBook1" placeholder="book id">
        <br><br>
        <input type="text" id="updateBookInput2" name="updateBook2" placeholder="new book name">
        <br><br>
        <input type="button" value="Submit" id="updateBookBtn">
      </div>
    `;
    return view;
  },
  
  after_render: () => {
    console.log('BooksPage rendered, now we can start some logic part');

    const getBooksBtn = document.querySelector('#getBooksBtn');
    const postBookInput = document.querySelector('#postBook');
    const postBookBtn = document.querySelector('#postBookBtn');
    const deleteBookInput = document.querySelector('#deleteBook');
    const deleteBookBtn = document.querySelector('#deleteBookBtn');
    const updateBookInput1 = document.querySelector('#updateBookInput1');
    const updateBookInput2 = document.querySelector('#updateBookInput2');
    const updateBookBtn = document.querySelector('#updateBookBtn');

    async function myGetFunc() {
      console.log('get request from booksPage sent');
      await fetch('http://localhost:5000/api/books', {
        method: 'GET', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': data.bearerToken
        }
      })
      .then( async (response) => { 
        const response2 = await response.json();
        console.log(response2);
        return response2;
      })
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log(err))
    };

    getBooksBtn.addEventListener('click', myGetFunc);


    async function myPostFunc() {
      console.log('post request from booksPage sent', postBookInput.value);
      await fetch('http://localhost:5000/api/books', {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': data.bearerToken
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


    async function myDeleteFunc() {
      console.log('delete request from booksPage sent', deleteBookInput.value);
      await fetch(`http://localhost:5000/api/books/${deleteBookInput.value}`, {
        method: 'DELETE', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': data.bearerToken
        }
      })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    };

    deleteBookBtn.addEventListener('click', myDeleteFunc);


    async function myUpdateFunc() {
      console.log('update request from booksPage sent', updateBookInput1.value,updateBookInput2.value);
      await fetch(`http://localhost:5000/api/books/${updateBookInput1.value}`, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': data.bearerToken
        },
        body: JSON.stringify(
          {'name': updateBookInput2.value,
          })
      })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    };

    updateBookBtn.addEventListener('click', myUpdateFunc);
  },
};




export default BooksPage;
