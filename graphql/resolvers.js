// import { typeDef as Post, resolvers as postResolvers } from './postSchema'
const Post = require('../models/post');

const resolvers = {
  Query: {
    post: async (root, args, context) => {
      var id = args.id;
      return await Post.findById(id);
    },
    posts: async (args) => {
      return await Post.find().sort({date: 'desc'});
    },
  }
};

module.exports = resolvers;