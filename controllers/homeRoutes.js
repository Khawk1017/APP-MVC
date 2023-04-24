const router = require('express').Router();
const { Articles, User, Pointers } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Articles and JOIN with user data
    const articleData = await Articles.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const articles = articleData.map((articles) => articles.get({ plain: true }));
    console.log(articles)

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      articles, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pointers', async (req, res) => {
  try {
    const pointersData = await Pointers.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        }
      ]
    })
    const pointers = pointersData.map((pointers) => pointers.get({ plain: true}));

    res.render('pointers', {
      pointers,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});


router.get('/articles/:id', async (req, res) => {
  try {
    const articleData = await Articles.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const articles = articleData.get({ plain: true });

    res.render('articles', {
      ...articles,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
