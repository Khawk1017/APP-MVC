const router = require('express').Router();
const { Articles } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newArticles = await Articles.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArticles);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const articlesData = await Articles.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!articlesData) {
      res.status(404).json({ message: 'No article found with this id!' });
      return;
    }

    res.status(200).json(articlesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
