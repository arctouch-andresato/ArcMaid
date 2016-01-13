var express = require('express');
var client = require('./../roombaClient');
var router = express.Router();
var inuse = false;

/* GET users listing. */
router.get('/status', function(req, res, next) {
	var jsonObj = {'status':'OK'};
  res.send(JSON.stringify(jsonObj));
  console.log('status : ' + JSON.stringify(jsonObj));
});

router.get('/', function(req, res, next) {
  res.send('ok');
  console.log('status');
});

router.get('/testStatusAsync', function(req, res, next) {
  client.statusasync(function(err,result){
  	res.send('response:' + result.status);
  console.log('testStatus complete:' + JSON.stringify(result));
  });
  
});

router.get('/testStatus', function(req, res, next) {
  var status = client.status();
  res.send(status);
  console.log('testStatus complete:' + JSON.stringify(status));
});

router.get('/clean', function(req, res, next) {
  var status = client.clean();
  res.send(status);
  console.log('testStatus complete:' + JSON.stringify(status));
});

router.get('/fullStatus', function(req, res, next) {
	var status = client.fullstatus();
	res.send(status);
	console.log('fullStatus complete:' + JSON.stringify(status));	
});

router.get('/loopright', function(req, res, next) {
  console.log('loopright method called');
  client.loopright(300);  
  console.log('loopright complete:' + JSON.stringify(status));
});

router.get('/resumeloopright', function(req, res, next) {
  console.log('resumeloopright method called');
  client.resumeloopright(300);  
  console.log('resumeloopright complete:' + JSON.stringify(status));
});

router.get('/leavedock', function(req, res, next) {
  console.log('leavedock method called');
  client.leavedock();  
  console.log('leavedock complete:' + JSON.stringify(status));
});

router.get('/spinright', function(req, res, next) {
  console.log('spinright method called');
  client.spinright();  
  console.log('spinright complete:' + JSON.stringify(status));
});

router.get('/drivetest', function(req, res, next) {
  console.log('spinright method called');
  client.driveonly(300,90);  
  console.log('spinright complete:' + JSON.stringify(status));
});

module.exports = router;