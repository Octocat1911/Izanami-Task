const express = require('express');
const router = express.Router();
const cors  = require('cors');
const bodyParser = require('body-parser');
const usermanager = require('../src/manager/UserManager');
const User = require('../src/User');
const ObjectID = require('mongodb').ObjectID;

router.use(bodyParser.json());       //JSON-encoded bodies
router.use(cors());

router.get('/user',cors(),function (req, res) {
  usermanager.getAllUsers(function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0){
     res.status(404);
    }
    res.send(result);
  });
});

router.get('/user/:id',cors(),function (req, res) {
  let id = ObjectID(req.params.id);
  usermanager.getUserById(id,function (result) {
    res.contentType('application/json; charset=utf-8');
    if(result.length === 0){
      res.status(404);
    }
    res.send(result);
  });
});

router.post('/user',cors(),function (req, res) {
  usermanager.addUser(new User(req.body.firstname,req.body.lastname,req.body.description),function (result) {
    if(result.result.n === 1){
      res.status(201);
      res.send(result);
    } else {
      res.status(400);
      res.send(result);
    }
  });
});

router.put('/user/:id',cors(),function (req, res) {
  let id = ObjectID(req.params.id);
  let user = req.body;
  usermanager.modifyUser(id,user, function (result) {
      res.status(200);
      res.send(result.value);
  });
});

router.delete('/user/:id',cors(),function (req, res) {
  let id = ObjectID(req.params.id);
  usermanager.deleteUser(id,function (result) {
    if(result.result.n === 1){
      res.status(200);
      res.send(result);
    } else {
      res.status(400);
      res.send(result);
    }
  });
});

module.exports = router;