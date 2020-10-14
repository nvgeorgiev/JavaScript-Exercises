const BaseModel = require('./base.js');
const path = require('path');

class CubeModel extends BaseModel {
  constructor() {
    const filePath = path.resolve('config/database.json');
    super(filePath);
  }

  insert(name, imageURL, difficultyLevel, description) {
    return super.insert({ name, imageURL, difficultyLevel, description });
  }

  getAll(data) {
    if (!data) {
      return super.getAll();
    }
    const { name, from, to } = data;
    return super.queryBy(function (entry) {
      return (name ? entry.name.includes(name) : true) && (from ? entry.difficultyLevel >= from : true) && (to ? entry.difficultyLevel <= to : true);
    });
  }
}

module.exports = new CubeModel();
