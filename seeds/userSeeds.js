const { User } = require("../models");

const userData = [
  {
    username: "yeet123",
    password: "admin",
  },
  {
    username: "guest",
    password: "guest",
  },
  {
    username: "admin1234",
    password: "guest1234",
  },
  {
    username: "dougdimmadome",
    password: "ownerofthedimsdaledimmadome",
  },
  {
    username: "timmy",
    password: "cosmo&wanda1234",
  },
  {
    username: "imstartingtorunoutof",
    password: "passwords",
  },
  {
    username: "fender1234",
    password: "telecaster",
  },
  {
    username: "AllforOne",
    password: "Almight",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
