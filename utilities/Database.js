/**
  Require environment variable
  - MONGO_APP_ID
*/

const stitch = require('mongodb-stitch')

module.exports = {
  /**
   * Assign the project to an employee.
   * @param {Object} connection - an object that contains a database name and collection name
   */
  connect: async function(connection) {
    try {
      const client = await stitch.StitchClientFactory.create(process.env.MONGO_APP_ID)
      const db = client.service('mongodb', 'mongodb-atlas').db(connection.db)
      await client.authenticate('apiKey', process.env.MONGO_STITCH_KEY)
      return db
    } catch (err) {
      console.error('Error on making a connection on mongo atlas')
      console.error(err)
    }
  },
  /**
   * Assign the project to an employee.
   * @param {Object} data - an json object to store
   * @param {Object} connection - an object that contains a database name and collection name
   */
  save: async function(data, connection) {
    try {
      const db = await this.connect(connection)
      db.collection(connection.collection).insertOne(data)
    } catch (err) {
      console.error('Error on writing a document on mongo atlas')
      console.error(err)
    }
  },
  /**
   * Assign the project to an employee.
   * @param {Object} data - an json object to store
   * @param {Object} connection - an object that contains a database name and collection name
   */
  find: async function(query, connection) {
    try {
      const db = await this.connect(connection)
      let doc = await db.collection(connection.collection).find(query).execute()
      return doc
    } catch (err) {
      console.error('Error on reading a document on mongo atlas')
      console.error(err)
    }
  }
}
