const merge = require('lodash.merge')
const Author = require('../../models/Author')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('allAuthors: failure')
  }
}

const authorById = async (_obj, {id}, context) => {
  try {
    const author = await Author.query().findOne('id', id)
    return author
  } catch (err) {
    console.log(err)
    throw new Error('authorById: failure')
  }
}

const resolvers = {
  Query: {
    allAuthors, 
    authorById,
  }
}

module.exports = merge(resolvers)