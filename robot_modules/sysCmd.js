var shell = require('shelljs');

function exec(cmd) {
	shell.exec(cmd);
}

function startHeadlessChromiumSignaling() {
	shell.exec('sudo chromium-browser --use-fake-ui-for-media-stream --no-sandbox --kiosk --headless --disable-gpu --remote-debugging-port=9090 https://signaling.bestchoice.live?roomName=robot.1.webrtc.hidden');
}
function stop() {
	shell.exit(1);
}

function restartPm2RobotWebrtc() {
	exec('pm2 stop robotWebrtc && pm2 start robotWebrtc');
}


function killChromium() {
	exec('sudo pkill chromium');
}


module.exports.exec = exec;
module.exports.startHeadlessChromiumSignaling = startHeadlessChromiumSignaling;
module.exports.stop = stop;
module.exports.restartPm2RobotWebrtc = restartPm2RobotWebrtc;
module.exports.killChromium = killChromium;
