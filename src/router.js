import BooksPage from './pages/booksPage/BooksPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import StartPage from './pages/startPage/StartPage';
import Utils from './utils/Utils';

const routes = {
  '/': StartPage ,
  '/registration': RegistrationPage ,
  '/login': LoginPage ,
  '/books': BooksPage ,
};

const router = async () => {
  const content = document.getElementById('root');

  const request = Utils.parseRequestURL();
  const parsedURL = request.resource ? `/${request.resource}` : '/';

  const page = routes[parsedURL];

  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
