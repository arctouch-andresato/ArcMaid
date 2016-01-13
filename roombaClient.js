var deviceIP = '192.168.49.105';
//var deviceIP = 'localhost:8080';
var retries = 4;
var timeoutmilliseconds = 15000;
var request = require('sync-request');
var sleep = require('sleep');
var statusasync = function(callback){
	console.log('command: status');
	var requestasync = require('request');
	var statusResponse = 'test';
	requestasync('http://'+deviceIP+'/roomba/status', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var statusResponse = JSON.parse(body);
	        console.log('Status received:' + body);
	        callback(null,statusResponse);
	     }
	     else{
	     	console.log(response.statusCode);
	     }
	})		
}

var status = function(){
	console.log('command: status');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/status.json',
			//var res = request('GET', 'http://services.groupkt.com/country/search?text=bra',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
	
	

}

var fullstatus = function(){
	console.log('command: fullstatus');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/full_status.json',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);


}

var clean = function(){
	console.log('command: clean');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=clean',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);

}

var stop = function(){
	console.log('command: status');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=drivestop',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);

}

var dock = function(){
	console.log('command: dock');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=dock',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);

}

var findme = function(){
	console.log('command: findme');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=find_me',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);

}

var driveright = function(){
	console.log('command: driveright');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=driveright',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var driveleft = function(){
	console.log('command: driveleft');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=driveleft',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var spinright = function(){
	console.log('command: spinright');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=spinright',
				{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var spinleft = function(){
	console.log('command: spinleft');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=spinleft',
						{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var driveonly = function(speed,degrees){
	console.log('command: driveonly');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=drive_only' +
				'&degrees=' + degrees + '&speed=' + speed,
						{'timeout':timeoutmilliseconds});
			console.log('command: status called');
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var leavehomebase = function(){
	console.log('command: leavehomebase');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=leavehomebase',
						{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var leavedock = function(){
	//console.log('leavedock start');
	//driveonly(-300,180);
	leavehomebase();
	sleep.sleep(5);
	spinright();
	console.log('leavedock end');
}

var loopright = function(looptimes){
	console.log('loopright start');
	leavedock();
	sleep.sleep(5);
	spinright();
	sleep.sleep(5);
	resumeloopright(looptimes);
}

var resumeloopright = function(looptimes){
	console.log('resumeloopright start');
	for (var i = looptimes; i >= 0; i--) {
		console.log('********************  Loop #' + (looptimes-i) + '  ********************');
		waitAndDetectBump(4,100);
		
		status = fullstatus();
		
		if(status.sensors.near_homebase ==1 && (i*2)<looptimes)
		{
			console.log('Home base detected, returning to dock...');
			dockprocedure();
			i=0;
		}

		driveonly(200,30);
	};
}

var waitAndDetectBump = function(loops, milliseconds){
	for (var i = loops - 1; i >= 0; i--) {
		var status = fullstatus();
		console.log('bumper_state:[' + status.sensors.bumper_state +
			'] light_bump:[' + status.sensors.light_bump + ']');
		if(status.sensors.bumper_state == 1 ||
			status.sensors.light_bump ==1)
		{
			managebumps('left');
			return;
		}
		sleep.usleep(milliseconds*1000);
	};
}

var dockprocedure = function(){
	console.log('dockprocedure');
	spinleft();
	sleep.sleep(1);
	driveright();
	sleep.sleep(1);
	dock();
}

var managebumps = function(direction){
	console.log('Mange bumps start');
	var bump = true;
	while(bump)
	{
		var status = fullstatus();
		if(status.sensors.bumper_state == 1 ||
			status.sensors.light_bump ==1)
		{
			if(direction=='left')
			{
				spinleft();
			}else{
				spinright();
			}

			sleep.sleep(1);
			stop();

		}else{
			bump=false;
			console.log('Manage to leave bump');
		}
	}
}

exports.status = status;
exports.statusasync = statusasync;
exports.fullstatus = fullstatus;
exports.clean = clean;
exports.stop = stop;
exports.dock = dock;
exports.findme = findme;
exports.driveright = driveright;
exports.driveleft = driveleft;
exports.spinright = spinright;
exports.spinleft = spinleft;
exports.driveonly = driveonly;
exports.leavedock = leavedock;
exports.managebumps = managebumps;
exports.loopright = loopright;
exports.resumeloopright = resumeloopright;
