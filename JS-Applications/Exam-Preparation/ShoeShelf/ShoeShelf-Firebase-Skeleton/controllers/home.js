import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { getAll } from '../models/shoes.js';

export function getHome(ctx) {
  setHeader(ctx);
  getAll().then((res) => {
    const shoes = res.docs.map((x) => (x = { ...x.data(), id: x.id }));
    shoes.sort((a, b) => parseInt(b.peopleBought.length) - parseInt(a.peopleBought.length));
    ctx.shoes = shoes;
    ctx.loadPartials(commonPartial).partial('./views/home.hbs');
  });
}
