const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');
const userController = require('../controllers/user');
const checkAuth = require('../middlewares/check-auth');

module.exports = (app) => {
  app.get('/', cubeController.getCubes);

  app.get('/login', checkAuth(false), userController.getLogin);
  app.post('/login', checkAuth(false), userController.postLogin);

  app.get('/register', checkAuth(false), userController.getRegister);
  app.post('/register', checkAuth(false), userController.postRegister);

  app.get('/create', checkAuth(true), cubeController.getCreateCube);
  app.post('/create', checkAuth(true), cubeController.postCreateCube);

  app.get('/details/:id', cubeController.getCube);

  app.get('/create/accessory', checkAuth(true), accessoryController.getCreateAccessory);
  app.post('/create/accessory', checkAuth(true), accessoryController.postCreateAccessory);

  app.get('/attach/accessory/:id', checkAuth(true), accessoryController.getAttachAccessory);
  app.post('/attach/accessory/:id', checkAuth(true), accessoryController.postAttachAccessory);

  app.get('/about', function (req, res) {
    res.render('about');
  });

  app.get('*', function (req, res) {
    res.render('404');
  });
};
