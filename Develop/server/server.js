const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./middleware/auth');

const app = express();

// Apollo Server Setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Authentication context
});

server.applyMiddleware({ app });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookSearch', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
app.listen(4000, () => {
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
});
