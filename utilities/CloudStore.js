const { Storage } = require('@google-cloud/storage')
const config = {
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  bucketName: process.env.GOOGLE_CLOUD_BUCKET_NAME,
  credentials: {
    type: process.env.GOOGLE_CLOUD_STORE_TYPE,
    project_id: process.env.GOOGLE_CLOUD_PROJECT_ID,
    private_key_id: process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLOUD_CLIENT_ID,
    auth_uri: process.env.GOOGLE_CLOUD_AUTH_URI,
    token_uri: process.env.GOOGLE_CLOUD_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_CLOUD_AUTH_CERT,
    client_x509_cert_url: process.env.GOOGLE_CLOUD_CLIENT_CERT,
  }
}

module.exports = {
  connect: function () {
    const storage = new Storage(config)
    return storage
  },
  upload: async function (bucketName, filename) {
    try {
      const storage = this.connect()
      const options = {}
      await storage.bucket(bucketName).upload(filename, options)
    } catch (error) {
      console.error(error)
    }
  },
  download: async function (bucketName, filename, destination) {
    try {
      const storage = this.connect()
      const options = { destination }
      await storage.bucket(bucketName).file(filename).download(options)
    } catch (error) {
      console.log(error)
    }
  }
}