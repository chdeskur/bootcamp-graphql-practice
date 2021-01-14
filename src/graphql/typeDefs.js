const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    allAuthors: [Author!]!
    allBooks: [Book!]!
    allPublishers: [Publisher!]!
    authorById(id: ID!): Author!
    bookById(id: ID!): Book!
    publisherById(id: ID!): Publisher!
  }

  type Mutation {
    addAuthor(input: newAuthor): Author!
    addBook(input: newBook): Book!
  }

  type Book {
    id: ID!
    title: String
    language: String
    numPages: Int 
    datePublished: Date 
    bestseller: Boolean
    authorId: ID
    publisherId: ID
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int 
    addressId: ID!
    books: [Book!]
  }

  type Author{
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int
    addressId: ID
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input newBook {
    title: String!
    language: String
    numPages: Int 
    datePublished: Date 
    bestseller: Boolean
    authorId: ID
    publisherId: ID
  }

  input newAuthor {
    firstName: String!
    lastName: String!
    age: Int
    email: String
    numBooksPublished: Int
    addressId: ID
  }
  
  scalar Date
`
