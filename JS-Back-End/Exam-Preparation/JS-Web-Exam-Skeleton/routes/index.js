const { Router } = require('express');
const { validationResult } = require('express-validator');
const { getUserStatus, checkAuthentication } = require('../controllers/user');
const validation = require('../controllers/validation');
const Play = require('../models/play');

const router = Router();

router.get('/', getUserStatus, (req, res) => {
  res.render('home', {
    isLoggedIn: req.isLoggedIn,
  });
});

router.get('/create', getUserStatus, (req, res) => {
  res.render('create', {
    isLoggedIn: req.isLoggedIn,
  });
});

router.post('/create', checkAuthentication, validation, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('create', {
      message: errors.array()[0].msg,
    });
  }

  try {
    const { title, description, imageUrl, isPublic } = req.body;
    const { _id } = req.user;
    const createdAt = new Date().toLocaleDateString();

    const play = new Play({ title, description, imageUrl, isPublic: isPublic === 'on' ? true : false, createdAt, creator: _id });

    await play.save();
    res.redirect('/');
  } catch (e) {
    console.error(e);
    res.redirect('/create');
  }
});

module.exports = router;
