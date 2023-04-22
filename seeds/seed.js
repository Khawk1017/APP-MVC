const sequelize = require('../config/connection');
const { User, Articles, Pointers } = require('../models');
const userData = require('./userData.json');
const pointersData = require('./pointersData.json');
const articleData = require('./articleData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const article of articleData) {
    await Articles.create({
      ...article,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const pointers of pointersData) {
    await Pointers.create({
      ...pointers,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();
