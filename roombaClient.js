var deviceIP = '192.168.49.105';

//var deviceIP = '192.168.1.15';
var retries = 4;
var timeoutmilliseconds = 15000;
var request = require('sync-request');
var sleep = require('sleep');
var statusasync = function(callback){
	console.log(returntimestring() + 'command: status');
	var requestasync = require('request');
	var statusResponse = 'test';
	requestasync('http://'+deviceIP+'/status.json', function (error, response, body) {
		console.log(response);
	    if (!error && response.status == 200) {
	        var statusResponse = JSON.parse(body);
	        console.log('Status received:' + body);
	        callback(null,statusResponse);
	     }
	     else{
	     	console.log(response.status);
	     }
	})		
}

var status = function(){
	console.log(returntimestring() + 'command: status');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/status.json',
			//var res = request('GET', 'http://services.groupkt.com/country/search?text=bra',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
	
	

}

var fullstatus = function(){
	console.log(returntimestring() + 'command: fullstatus');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/full_status.json',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);


}

var clean = function(){
	console.log(returntimestring() + 'command: clean');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=clean',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);

}

var stop = function(){
	console.log(returntimestring() + 'command: status');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=drivestop',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);

}

var dock = function(){
	console.log(returntimestring() + 'command: dock');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=dock',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);

}

var findme = function(){
	console.log(returntimestring() + 'command: findme');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=find_me',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);

}

var driveright = function(){
	console.log(returntimestring() + 'command: driveright');
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
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
}

var driveleft = function(){
	console.log(returntimestring() + 'command: driveleft');
	for (var i = retries - 1; i >= 0; i--) {
		try{
	var res = request('GET', 'http://'+deviceIP+'/command.json?command=driveleft',
				{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log('Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
}

var spinright = function(){
	console.log(returntimestring() + 'command: spinright');
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

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
}

var spinleft = function(){
	console.log(returntimestring() + 'command: spinleft');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=spinleft',
						{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error('Number of retries exceeded:' + retries);
}

var driveonly = function(speed,degrees){
	console.log(returntimestring() + 'command: driveonly');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=drive_only' +
				'&degrees=' + degrees + '&speed=' + speed,
						{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
}

var leavehomebase = function(){
	console.log(returntimestring() + 'command: leavehomebase');
	for (var i = retries - 1; i >= 0; i--) {
		try{
			var res = request('GET', 'http://'+deviceIP+'/command.json?command=leavehomebase',
						{'timeout':timeoutmilliseconds});
			console.log(res.getBody());
			i=retries;
			return JSON.parse(res.getBody());
		}catch(err)
		{
			console.log(returntimestring() + 'Error:'+ err + ' - retry:' + i)
		}
	};

	throw new Error(returntimestring() + 'Number of retries exceeded:' + retries);
}

var leavedock = function(){
	console.log(returntimestring() + 'leavedock start');
	//driveonly(-300,180);
	leavehomebase();
	sleep.sleep(5);
	var status = fullstatus();
	while(status.power_status.current >0)
	{
		console.log(returntimestring() + 'could not leavedock:' + status.power_status.current);
		leavehomebase();
		sleep.sleep(5);
		status = fullstatus();
	}
	spinright();
	console.log(returntimestring() + 'leavedock end');
}

var loopright = function(looptimes){
	console.log(returntimestring() + 'loopright start');
	leavedock();
	sleep.sleep(5);
	spinright();
	sleep.sleep(5);
	resumeloopright(looptimes);
}

var resumeloopright = function(looptimes){
	console.log(returntimestring() + 'resumeloopright start');
	for (var i = looptimes; i >= 0; i--) {
		console.log(returntimestring() + '********************  Loop #' + (looptimes-i) + '  ********************');
		waitAndDetectBump(2,200);
		
		status = fullstatus();
		
		//disable the return to dock feature
		if(status.sensors.near_homebase == 1 && status.power_status.battery_charge < 15)
		{
			console.log(returntimestring() + 'Low power and home base detected, returning to dock...');
			dockprocedure();
			i=0;
		}
		else
		{
			driveonly(200,30);
		}

		
	};
}

var waitAndDetectBump = function(loops, milliseconds){
	for (var i = loops - 1; i >= 0; i--) {
		var status = fullstatus();
		console.log(returntimestring() + 'bumper_state:[' + status.sensors.bumper_state +
			'] light_bump:[' + status.sensors.light_bump + ']');
		if(status.sensors.bumper_state == 1 ||
			status.sensors.light_bump ==1)
		{
stop();
			managebumps('left',status);
			return;
		}
		sleep.usleep(milliseconds*1000);
	};
}

var dockprocedure = function(){
	console.log(returntimestring() + 'dockprocedure');
	spinleft();
	sleep.sleep(1);
	driveright();
	sleep.sleep(1);
	dock();
}

var managebumps = function(direction,status){
	console.log(returntimestring() + 'Mange bumps start');
	var bump = true;
	while(bump)
	{
		//var 
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
			status = fullstatus();

		}else{
			bump=false;
			console.log(returntimestring() + 'Manage to leave bump');
		}
	}
}

var returntimestring = function(){
	var time = new Date();
	return time.toISOString()
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '') + "." + time.getMilliseconds() + " - ";
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
