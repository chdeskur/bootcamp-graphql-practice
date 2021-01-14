const merge = require('lodash.merge')
const Author = require('../../models/Author')

const addAuthor = async (_obj, args, context) => {
  try {
    const authors = await Author.query().insert({
      firstName: args.input.firstName, 
      lastName: args.input.lastName,
      age: args.input.age,
      email: args.input.email,
    }).returning('*')
    return authors
  } catch (err) {
    console.log(err)
    throw new Error('addAuthor: failure')
  }
}

const resolvers = {
  Mutation: {
    addAuthor
  }
}

module.exports = merge(resolvers)