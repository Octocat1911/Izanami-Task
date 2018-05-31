const express = require('express');
const router = express.Router();
const cors  = require('cors');
const bodyParser = require('body-parser');
const taskmanager = require('../src/manager/TaskManager');
const Task = require('../src/Task');
const ObjectID = require('mongodb').ObjectID;


router.use(bodyParser.json());       //JSON-encoded bodies
router.use(cors());

/* GET home page. */
router.get('/task',cors(), function(req, res, next) {
  taskmanager.getAllTask(function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0){
      res.status(404);
    }
    res.send(result);
  });
});

router.get('/task/:id',cors(),function (req,res,next) {
  let id = 0;
  try {
    id = new ObjectID(req.params.id);
  }catch (e) {
    res.sendStatus(404);
    return e;
  }
  taskmanager.getTaskById(id,function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0){
      res.status(404);
    }
    res.send(result);
  });
});

router.get('/task/:id/user',cors(),function (req,res,next) {
  let id = 0;
  try {
    id = ObjectID(req.params.id);
  } catch (e) {
    res.sendStatus(404);
    return e;
  }
  taskmanager.getTaskUsers(id,function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0){
      res.sendStatus(404);
    } else {
      res.send(result);
    }
  })
});

router.post('/task',cors(),function (req,res,next) {
  let task = new Task(req.body.title,req.body.dateBegin,req.body.dateEnd,req.body.status,req.body.tags);
  taskmanager.addTask(task,function (result) {
    if(result.result.n === 1){
      res.status(201);
      res.send(result);
    } else {
      res.status(202);
      res.send(result);
    }
  });
});

router.put('/task/:id',cors(),function (req,res,next) {
  let id = 0;
  try {
    id = ObjectID(req.params.id);
  } catch (e) {
    res.sendStatus(400);
    return e;
  }
  let task = req.body;
  taskmanager.modifyTask(id,task,function (result) {
      res.status(200);
      res.send(result.value);
  });
});

router.put('/task/:id/user/:userid',cors(),function (req, res, next) {
  let id = 0;
  let userid = 0;
  try {
    id = ObjectID(req.params.id);
    userid = ObjectID(req.params.userid);
  } catch (e) {
    res.sendStatus(400);
    return e;
  }
  taskmanager.addTaskUser(id,userid,function (result) {
    if(result.result.n === 1) {
      res.status(201);
      res.send(result);
    } else {
      res.status(202);
      res.send(result);
    }
  });
});

router.delete('/task/:id',cors(),function (req,res,next) {
  let id = 0;
  try {
    id = new ObjectID(req.params.id);
  } catch (e) {
    res.sendStatus(400);
    return e;
  }
   taskmanager.deleteTask(id,function (result) {
     if(result.result.n === 1){
       res.status(200);
       res.send(result);
     } else {
       res.status(202);
       res.send(result);
     }
   });
});

router.delete('/task/:id/user/:userid',cors(),function (req, res, next) {
  let id = 0;
  let userid = 0;
  try {
    id = ObjectID(req.params.id);
    userid = ObjectID(req.params.userid);
  } catch (e) {
    res.sendStatus(400);
    return e;
  }
  taskmanager.deleteTaskUser(id,userid,function (result) {
    if(result.result.n === 1){
      res.status(200);
      res.send(result);
    } else {
      res.status(202);
      res.send(result);
    }
  });
});

module.exports = router;