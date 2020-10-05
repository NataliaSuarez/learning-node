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

schema {
  query: Query
}
`;

module.exports = typeDefs;