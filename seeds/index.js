const seedUsers = require("./userSeeds");
const seedPosts = require("./postSeeds");
const seedComments = require("./commentSeeds");

const sequelize = require("../config/config");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("<<<<<DataBase Synchronized>>>>>");
  await seedUsers();
  console.log("<<<<<Users Have Been Seeded>>>>>");

  await seedPosts();
  console.log("<<<<<Posts have been Seeded>>>>>");

  await seedComments();
  console.log("<<<<<Comments have been seeded>>>>>");

  process.exit(0);
};
seedAll();
