//var deviceIP = '192.168.49.105';
var deviceIP = 'localhost';

var status = function(){
	var request = require('request');
	request('http://'+deviceIP+'/status', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var statusResponse = JSON.parse(body);
        return statusResponse;
     }
})
}

exports.status = status;
