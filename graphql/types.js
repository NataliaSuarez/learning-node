const typeDefs = `
type Query {
  post(id: String!): Post
  posts: [Post]
}

type Post {
  id: String!
  title: String
  description: String,
  content: String
}

type Mutation {
  createPost(title: String, description: String, content: String): Post
}

schema {
  query: Query,
  mutation: Mutation
}
`;

module.exports = typeDefs;