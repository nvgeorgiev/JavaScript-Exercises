import commonPartial from './partials.js';
import { saveUserInfo } from './auth.js';
import { registerUser, login, logout } from '../models/user.js';

export function getRegister(ctx) {
  ctx.loadPartials(commonPartial).partial('./views/user/register.hbs');
}

export function postRegister(ctx) {
  const { email, password, rePassword } = ctx.params;

  if (email.length <= 0) {
    throw new Error('Email should not be empty!');
  }
  if (password.length < 6) {
    throw new Error('Password should be at least 6 characters long!');
  }
  if (password !== rePassword) {
    throw new Error("Passwords don't match!");
  }

  registerUser(email, password)
    .then((res) => {
      saveUserInfo(res.user.email);

      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getLogin(ctx) {
  ctx.loadPartials(commonPartial).partial('./views/user/login.hbs');
}

export function postLogin(ctx) {
  const { email, password } = ctx.params;

  login(email, password)
    .then((res) => {
      saveUserInfo(res.user.email);

      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getLogout(ctx) {
  logout().then((res) => {
    sessionStorage.clear();
    ctx.redirect('#/home');
  });
}
