const merge = require('lodash.merge')
const Book = require('../../models/Book')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch (err) {
    console.log(err)
    throw new Error('allBooks: failure')
  }
}

const bookById = async (_obj, {id}, context) => {
  try {
    const author = await Book.query().where({ id: id })
    return author
  } catch (err) {
    console.log(err)
    throw new Error('bookById: failure')
  }
}

const resolvers = {
  Query: { 
    allBooks, 
    bookById,
  }
}

module.exports = merge(resolvers)