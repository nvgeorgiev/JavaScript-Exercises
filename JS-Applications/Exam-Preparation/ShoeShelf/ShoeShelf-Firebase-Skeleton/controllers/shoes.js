import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { create, get, update, remove } from '../models/shoes.js';

export function getCreate(ctx) {
  setHeader(ctx);

  ctx.loadPartials(commonPartial).partial('./views/shoes/create.hbs');
}

export function postCreate(ctx) {
  const { name, price, imageUrl, description, brand } = ctx.params;
  const creator = sessionStorage.getItem('user');
  const peopleBought = [];

  if (!name) {
    throw new Error("Name shouldn't be empty!");
  } else if (!price) {
    throw new Error("Price shouldn't be empty!");
  } else if (!imageUrl) {
    throw new Error("Image link shouldn't be empty!");
  } else if (!description) {
    throw new Error("Description shouldn't be empty!");
  } else if (!brand) {
    throw new Error("Brand shouldn't be empty!");
  }

  create({ name, price, imageUrl, description, brand, creator, peopleBought })
    .then((res) => {
      ctx.redirect('#/home');
    })
    .catch((e) => console.log(e));
}

export function getDetails(ctx) {
  setHeader(ctx);
  const id = ctx.params.id;
  const buyer = sessionStorage.getItem('user');

  get(id)
    .then((res) => {
      ctx.shoe = res.data();
      ctx.isCreator = ctx.shoe.creator === sessionStorage.getItem('user');
      ctx.isBuyer = ctx.shoe.peopleBought.includes(buyer);
      ctx.shoe.id = id;
      ctx.loadPartials(commonPartial).partial('./views/shoes/details.hbs');
    })
    .catch((e) => console.log(e));
}

export function getEdit(ctx) {
  setHeader(ctx);
  const id = ctx.params.id;

  get(id)
    .then((res) => {
      ctx.shoe = res.data();
      ctx.shoe.id = id;
      ctx.loadPartials(commonPartial).partial('./views/shoes/edit.hbs');
    })
    .catch((e) => console.log(e));
}

export function postEdit(ctx) {
  const { name, price, imageUrl, description, brand } = ctx.params;
  const id = ctx.params.id;

  if (!name) {
    throw new Error("Name shouldn't be empty!");
  } else if (!price) {
    throw new Error("Price shouldn't be empty!");
  } else if (!imageUrl) {
    throw new Error("Image link shouldn't be empty!");
  } else if (!description) {
    throw new Error("Description shouldn't be empty!");
  } else if (!brand) {
    throw new Error("Brand shouldn't be empty!");
  }

  update(id, { name, price, imageUrl, description, brand })
    .then((res) => {
      ctx.redirect(`#/details/${id}`);
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

export function getBuy(ctx) {
  const id = ctx.params.id;
  const buyer = sessionStorage.getItem('user');

  get(id)
    .then((res) => {
      ctx.shoe = res.data();
      ctx.shoe.id = id;
      ctx.shoe.peopleBought.push(buyer);
      const peopleBought = ctx.shoe.peopleBought;

      update(id, { peopleBought }).then((res) => {
        ctx.redirect(`#/details/${id}`);
      });
    })
    .catch((e) => console.log(e));
}
