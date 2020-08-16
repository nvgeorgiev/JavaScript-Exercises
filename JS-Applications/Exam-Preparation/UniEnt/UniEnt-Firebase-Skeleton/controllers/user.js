import commonPartial from './partials.js';
import { registerUser, login, logout } from '../models/user.js';
import { saveUserInfo, setHeader } from './auth.js';
import { getAll } from '../models/events.js';

export function getRegister(ctx) {
  ctx.loadPartials(commonPartial).partial('./views/user/register.hbs');
}

export function postRegister(ctx) {
  const { username, password, rePassword } = ctx.params;

  if (password !== rePassword) {
    throw new Error("Passwords don't match!");
  }

  registerUser(username, password)
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
  const { username, password } = ctx.params;

  login(username, password)
    .then((res) => {
      saveUserInfo(res.user.email);
      ctx.redirect('#/home');
      setTimeout(() => {
        notification('Logged in successfuly!', '#successBox');
      }, 1000);
    })
    .catch((e) => {
      notification(`${e.message}`, '#errorBox');
    });
}

export function getProfile(ctx) {
  setHeader(ctx);
  getAll(ctx).then((res) => {
    console.log(res);
    ctx.loadPartials(commonPartial).partial('./views/user/profile.hbs');
  });
}

export function getLogout(ctx) {
  logout().then((res) => {
    sessionStorage.clear();
    ctx.redirect('#/home');
  });
}

function notification(message, selector) {
  const notification = document.querySelector(selector);
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000);
  addEventListener('click', () => {
    notification.style.display = 'none';
  });
}
