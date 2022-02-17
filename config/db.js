const mongoose = require('mongoose')
const config = require('./index')

const connection = async () => {
  const conn = await mongoose.connect(
    `mongodb://${config.dbUsername}:${config.dbPassword}@backendnodetzul-shard-00-00.k9imb.mongodb.net:27017,backendnodetzul-shard-00-01.k9imb.mongodb.net:27017,backendnodetzul-shard-00-02.k9imb.mongodb.net:27017/${config.dbName}?ssl=true&replicaSet=atlas-a95nws-shard-0&authSource=admin&retryWrites=true&w=majority
mongodb://${config.dbUsername}:${config.dbPassword}@backendnodetzul-shard-00-00.k9imb.mongodb.net:27017,backendnodetzul-shard-00-01.k9imb.mongodb.net:27017,backendnodetzul-shard-00-02.k9imb.mongodb.net:27017/${config.dbName}?ssl=true&replicaSet=atlas-a95nws-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  console.log(`~MongoDB connected~`)
}

module.exports = { connection, mongoose }
