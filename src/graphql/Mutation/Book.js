const merge = require('lodash.merge')
const Book = require('../../models/Book')

const addBook = async (_obj, args, context) => {
  try {
    const books = await Book.query().insert({
      title: args.input.title, 
      language: args.input.language,
      numPages: args.input.numPages,
      datePublished: args.input.datePublished,
      bestseller: args.input.bestseller,
      authorId: args.input.authorId,
      publisherId: args.input.publisherId,
    }).returning('*')
    return books
  } catch (err) {
    console.log(err)
    throw new Error('addAuthor: failure')
  }
}

const resolvers = {
  Mutation: {
    addBook
  }
}

module.exports = merge(resolvers)