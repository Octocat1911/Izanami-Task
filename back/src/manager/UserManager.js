const dbManager = require('./DBManager');

class UserManager{

  getAllUsers(callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('users').find().toArray(function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  getUserById(id,callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('users').find({"_id": id}).toArray(function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    } catch (e) {
      return e;
    }
  }

  addUser(user,callback){
    try{
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('users').insertOne(user,function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  modifyUser(id,user,callback){
    try{
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('users').findOneAndUpdate({"_id": id},{$set: user},{returnOriginal: false},function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  deleteUser(id,callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('users').deleteOne({"_id":id},function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

}

module.exports = new UserManager();