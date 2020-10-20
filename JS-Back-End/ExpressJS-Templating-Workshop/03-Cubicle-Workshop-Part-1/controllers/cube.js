// const cubeModel = require('../models/cube.js');
module.exports = {
  getCubes(req, res, next) {
    // const { from, search, to } = req.query;
    // cubeModel
    //   .getAll({ name: search, from: Number(from), to: Number(to) })
    //   .then((cubes) => {
    //     res.render('index', { layout: false, cubes, from, search, to });
    //   })
    //   .catch(next);
  },
  getCube(req, res, next) {
    // const id = Number(req.params.id);
    // cubeModel
    //   .findById(id)
    //   .then((cube) => {
    //     res.render('details', { layout: false, cube });
    //   })
    //   .catch(next);
  },
  getCreateCube(req, res) {
    // res.render('create', { layout: false });
  },
  postCreateCube(req, res, next) {
    // const { name, imageURL, difficultyLevel, description } = req.body;
    // cubeModel
    //   .insert(name, imageURL, Number(difficultyLevel), description)
    //   .then(() => res.redirect('/'))
    //   .catch(next);
  },
};
