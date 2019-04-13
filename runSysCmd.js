

var shell = require('shelljs');

shell.echo('hello world');
shell.exec('sudo chromium-browser --use-fake-ui-for-media-stream --no-sandbox --kiosk --headless --disable-gpu --remote-debugging-port=9090 https://signaling.bestchoice.live?roomName=pi')    