const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes');
const pointersRoutes = require('./pointersRoutes');


router.use('/users', userRoutes);
router.use('/articles', articleRoutes);
router.use('/pointers', pointersRoutes);


module.exports = router;
