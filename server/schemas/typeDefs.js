const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: 
        username: String
        email: String
        bookCount: [Book]
    }

    type Book {
        bookId
        authors []
    }

    type Auth {
        token
        user: 
    }

    type Query {

    }

    type Mutation {

    }
`

module.exports = typeDefs;