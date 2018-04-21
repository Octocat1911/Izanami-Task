const MongoClient = require('mongodb').MongoClient;

class DBManager{

  getDbConnection(callback) {
    try {
      MongoClient.connect('mongodb://localhost:27017', callback);
    }catch (e) {
      return e;
    }
  }

}

module.exports = new DBManager();
