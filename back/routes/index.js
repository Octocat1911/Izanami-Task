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
    if(result.length === 0 || result === undefined){
      result = 'Oops sorry it might be empty then ;) !';
      res.contentType('text/html');
    }
    res.send(result);
  });
});

router.get('/task/:id',cors(),function (req,res,next) {
  let id = 0;
  try {
    id = new ObjectID(req.params.id);
  }catch (e) {
    res.contentType('text/html');
    res.send('Oops nothing here ! :(');
    return e;
  }
  taskmanager.getTaskById(id,function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0 || result === undefined){
      result = 'Oops nothing here ! :(';
      res.contentType('text/html');
    }
    res.send(result);
  });
});

router.post('/task/',cors(),function (req,res,next) {
  taskmanager.addTask(new Task(req.body.title,req.body.dateBegin,req.body.dateEnd,req.body.status,req.body.tags),function (result) {
    res.status(201);
    res.send(result);
  });
});

router.put('/task/',cors(),function (req,res,next) {
  let id = ObjectID(req.body._id);
  let task = req.body;
  delete task._id;
  taskmanager.modifyTask(id,task,function (result) {
    res.status(201);
    res.send(result);
  });
});

router.delete('/task/:id',cors(),function (req,res,next) {
  let id = new ObjectID(req.params.id);
   taskmanager.deleteTask(id,function (result) {
     res.status(201);
     res.send(result);
   });
});

module.exports = router;