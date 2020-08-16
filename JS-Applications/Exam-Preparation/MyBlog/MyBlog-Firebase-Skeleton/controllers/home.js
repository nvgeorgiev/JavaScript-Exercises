import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { getAll } from '../models/posts.js';

export function getHome(ctx) {
  setHeader(ctx);
  getAll().then((res) => {
    const posts = res.docs.map((x) => (x = { ...x.data(), id: x.id }));
    ctx.posts = posts;
    ctx.loadPartials(commonPartial).partial('./views/home.hbs');
  });
}
