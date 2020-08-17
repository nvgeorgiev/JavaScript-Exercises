import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { create, get, update, remove } from '../models/articles.js';

export function getCreate(ctx) {
  setHeader(ctx);
  ctx.loadPartials(commonPartial).partial('./views/articles/create.hbs');
}

export function postCreate(ctx) {
  const { title, category, content } = ctx.params;
  const creator = sessionStorage.getItem('user');

  if (category !== categories.JavaScript && category !== categories.Csharp && category !== categories.Java && category !== categories.Pyton) {
    throw new Error(categoriesErrorMessage);
  }

  create({ title, category, content, creator })
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getDetails(ctx) {
  setHeader(ctx);
  const id = ctx.params.id;

  get(id)
    .then((res) => {
      ctx.article = res.data();
      ctx.isCreator = ctx.article.creator === sessionStorage.getItem('user');
      ctx.article.id = id;
      ctx.loadPartials(commonPartial).partial('./views/articles/details.hbs');
    })
    .catch((e) => console.log(e));
}

export function getEdit(ctx) {
  setHeader(ctx);
  const id = ctx.params.id;

  get(id)
    .then((res) => {
      ctx.article = res.data();
      ctx.article.id = id;
      ctx.loadPartials(commonPartial).partial('./views/articles/edit.hbs');
    })
    .catch((e) => console.log(e));
}

export function postEdit(ctx) {
  const { title, category, content } = ctx.params;
  const id = ctx.params.id;

  update(id, { title, category, content })
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getRemove(ctx) {
  const id = ctx.params.id;

  remove(id)
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

const categories = {
  JavaScript: 'JavaScript',
  Csharp: 'C#',
  Java: 'Java',
  Pyton: 'Pyton',
};

const categoriesErrorMessage = 'Category must be one of the following: JavaScript, C#, Java or Pyton';
