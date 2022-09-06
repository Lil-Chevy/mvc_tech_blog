const { Post } = require("../models");

const postData = [
  {
    title: "Help",
    post_body: "What do i do",
    user_id: 1,
  },

  {
    title: "Please",
    post_body: "for some reason i cannot make this work",
    user_id: 2,
  },

  {
    title: "Wanted this solved",
    post_body: "what seems to be going on here",
    user_id: 3,
  },

  {
    title: "yeet",
    post_body: "Check this out",
    user_id: 4,
  },
  {
    title: "I need help",
    post_body: "please see what i'm doing wrong here",
    user_id: 5,
  },
  {
    title: "code wrong",
    post_body: "check this code out and see what seems to be the matter",
    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
