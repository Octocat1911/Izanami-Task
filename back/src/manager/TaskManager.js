const dbManager = require('./DBManager');

class TaskManager{

  getAllTask(callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('tasks').find().toArray(function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  getTaskById(id,callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('tasks').find({"_id": id}).toArray(function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  addTask(task,callback){
    try{
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('tasks').insertOne(task,function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  modifyTask(id,task,callback){
    try{
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('tasks').updateOne({"_id": id},{$set: task},function (err, result) {
          if(err) throw err;
          callback(result);
          client.close();
        });
      });
    }catch (e) {
      return e;
    }
  }

  deleteTask(id,task,callback){
    try {
      dbManager.getDbConnection(function (err, client) {
        if(err) throw err;
        const db = client.db('nodejs');
        db.collection('tasks').deleteOne({"_id":id},function (err, result) {
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

module.exports = new TaskManager();