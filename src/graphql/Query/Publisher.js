const merge = require('lodash.merge')
const Publisher = require('../../models/Publisher')

const allPublishers = async () => {
  try {
    const books = await Publisher.query()
    return books
  } catch (err) {
    console.log(err)
    throw new Error('allPublisher: failure')
  }
}

const publisherById = async (_obj, {id}, context) => {
  try {
    const author = await Publisher.query().where({ id: id })
    return author
  } catch (err) {
    console.log(err)
    throw new Error('publisherById: failure')
  }
}

const resolvers = {
  Query: { 
    allPublishers, 
    publisherById,
  }
}

module.exports = merge(resolvers)