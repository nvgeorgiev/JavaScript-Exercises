import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { getAll } from '../models/articles.js';

export function getHome(ctx) {
  setHeader(ctx);
  getAll().then((res) => {
    const articles = res.docs.map((x) => (x = { ...x.data(), id: x.id }));
    const js = [];
    const java = [];
    const pyton = [];
    const csharp = [];

    ctx.articles = articles;

    articles.forEach((current) => {
      if (current.category === 'JavaScript') {
        js.push(current);
      } else if (current.category === 'Java') {
        java.push(current);
      } else if (current.category === 'Pyton') {
        pyton.push(current);
      } else if (current.category === 'C#') {
        csharp.push(current);
      }

      ctx.js = js;
      ctx.java = java;
      ctx.pyton = pyton;
      ctx.csharp = csharp;
    });

    ctx.loadPartials(commonPartial).partial('./views/home.hbs');
  });
}
