const accessoryModel = require('../models/accessory');
const cubeModel = require('../models/cube');

module.exports = {
  getCreateAccessory(req, res) {
    res.render('create-accessory');
  },

  postCreateAccessory(req, res, next) {
    const { name, description, imageURL } = req.body;
    accessoryModel
      .create({ name, description, imageURL })
      .then(() => res.redirect('/'))
      .catch(next);
  },

  getAttachAccessory(req, res, next) {
    const cubeId = req.params.id;
    Promise.all([cubeModel.findById(cubeId), accessoryModel.find({ cubes: { $nin: cubeId } })])
      .then(([cube, accessories]) => {
        res.render('attach-accessory', { cube, accessories, noAvailableAccessories: accessories.length === 0 });
      })
      .catch(next);
  },

  postAttachAccessory(req, res, next) {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    Promise.all([accessoryModel.updateMany({ _id: accessoryId }, { $push: { cubes: cubeId } }), cubeModel.updateMany({ _id: cubeId }, { $push: { accessories: accessoryId } })])
      .then(() => {
        res.redirect('/details/' + cubeId);
      })
      .catch(next);
  },
};
