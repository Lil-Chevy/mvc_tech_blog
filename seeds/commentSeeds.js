const { text } = require("express");
const { Comment } = require("../models");
const commentData = [
  {
    comment_text: "Thanks for your feedback",
    user_id: "6",
    post_id: "1",
  },
  {
    comment_text: "what dependencies can work qith SQL",
    user_id: "3",
    post_id: "2",
  },
  {
    comment_text: "How do i start my career in development",
    user_id: "2",
    post_id: "3",
  },
  {
    comment_text: "Thanks for your feedback",
    user_id: "4",
    post_id: "4",
  },
  {
    comment_text: "got any good books for this",
    user_id: "1",
    post_id: "5",
  },
  {
    comment_text: "thanks for the source!",
    user_id: "5",
    post_id: "6",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
