import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { create, get, getAll, update, remove } from '../models/posts.js';

export function postCreate(ctx) {
  const { title, category, content } = ctx.params;

  create({ title, category, content })
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getDetails(ctx) {
  setHeader(ctx);

  const id = ctx.params.id;

  get(id).then((res) => {
    ctx.post = res.data();
    ctx.post.id = id;
    ctx.loadPartials(commonPartial).partial('./views/posts/details.hbs');
  });
}

export function getEdit(ctx) {
  setHeader(ctx);

  const id = ctx.params.id;

  getAll().then((res) => {
    const posts = res.docs.map((x) => (x = { ...x.data(), id: x.id }));
    ctx.posts = posts;
  });

  get(id)
    .then((res) => {
      ctx.post = res.data();
      ctx.post.id = id;
      ctx.loadPartials(commonPartial).partial('./views/posts/edit.hbs');
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

export function getDelete(ctx) {
  const id = ctx.params.id;

  remove(id)
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}
