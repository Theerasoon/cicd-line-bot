/**
  Require environment variable
  - MONGO_APP_ID
*/

const stitch = require('mongodb-stitch')

module.exports = {
  /**
   * @param {Object} connection - an object that contains a database name and collection name
   */
  connect: async function(connection) {
    const client = await stitch.StitchClientFactory.create(process.env.MONGO_APP_ID)
    const db = client.service('mongodb', 'mongodb-atlas').db(connection.db)
    await client.authenticate('apiKey', process.env.MONGO_STITCH_KEY)
    return db
  },
  /**
   * @param {Object} data - an json object to store
   * @param {Object} connection - an object that contains a database name and collection name
   */
  save: async function(data, connection) {
    const db = await this.connect(connection)
    return db.collection(connection.collection).insertOne(data)
  },
  /**
   * @param {Object} query - a query for search
   * @param {Object} connection - an object that contains a database name and collection name
   */
  find: async function(query, connection) {
    const db = await this.connect(connection)
    let doc = await db.collection(connection.collection).find(query).execute()
    return doc
  },
  /**
   * @param {Object} query - a query for delete
   * @param {Object} connection - an object that contains a database name and collection name
   */
  delete: async function (query, connection) {
    const db = await this.connect(connection)
    return db.collection(connection.collection).deleteMany(query)
  },
  /**
   * @param {Object} query - a query for replace
   * @param {Object} data - a replace data
   * @param {Object} connection - an object that contains a database name and collection name
   */
  update: async function (query, data, connection) {
    const db = await this.connect(connection)
    const options = {
      upsert: true
    }
    delete data['_id']
    return db.collection(connection.collection).updateOne(query, data, options)
  },
}
