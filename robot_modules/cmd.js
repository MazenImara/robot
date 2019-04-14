var sysCmd = require('./sysCmd');



function exec(cmd) {
	console.log('cmd: '+cmd);
	if (cmd == 'restartPm2RobotWebrtc') {
		sysCmd.restartPm2RobotWebrtc();
	}
	if (cmd == 'killChromium') {
		sysCmd.killChromium();
	}
}

module.exports.exec = exec;