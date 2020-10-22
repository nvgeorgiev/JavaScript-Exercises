const cubeModel = require('../models/cube');

module.exports = {
  getCubes(req, res, next) {
    const { from, search, to } = req.query;

    let query = {};

    if (search) {
      query.name = new RegExp(search, 'i');
    }
    if (from) {
      query.difficultyLevel = { $gte: Number(from) };
    }
    if (to) {
      query.difficultyLevel = query.difficultyLevel || {};
      query.difficultyLevel.$lte = Number(to);
    }

    cubeModel
      .find(query)
      .populate('accessories')
      .then((cubes) => {
        res.render('index', { cubes, from, search, to });
      })
      .catch(next);
  },

  getCube(req, res, next) {
    const id = req.params.id;
    return cubeModel
      .findById(id)
      .populate('accessories')
      .then((cube) => {
        res.render('details', { cube });
      })
      .catch(next);
  },

  getCreateCube(req, res) {
    res.render('create');
  },

  postCreateCube(req, res, next) {
    const { name, description, imageURL, difficultyLevel } = req.body;

    cubeModel
      .create({ name, description, imageURL, difficultyLevel: Number(difficultyLevel) })
      .then(() => res.redirect('/'))
      .catch(next);
  },
};
