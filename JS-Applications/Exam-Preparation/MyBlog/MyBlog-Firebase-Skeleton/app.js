import { getHome } from './controllers/home.js';
import { getRegister, postRegister, getLogin, postLogin, getLogout } from './controllers/user.js';
import { postCreate, getDetails, getEdit, postEdit, getDelete } from './controllers/posts.js';

const app = Sammy('body', function () {
  this.use('Handlebars', 'hbs');

  this.get('/', getHome);
  this.get('#/home', getHome);
  this.get('index.html', getHome);

  this.get('#/register', getRegister);
  this.post('#/register', postRegister);

  this.get('#/login', getLogin);
  this.post('#/login', postLogin);

  this.get('#/logout', getLogout);

  this.post('#/create-post', postCreate);

  this.get('#/details/:id', getDetails);

  this.get('#/edit/:id', getEdit);
  this.post('#/edit/:id', postEdit);

  this.get('#/delete/:id', getDelete);
});
app.run('#/home');
