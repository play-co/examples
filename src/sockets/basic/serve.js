//## Node.js Server Code
//The following code is a simple Node.js TCP server that echoes whatever it receives.
//In order to use it, you should:
//+ Create a 'GCServer.js' file on your computer
//+ Paste the code below inside
//+ Plug in your IP address
//+ Run the file on Node.js using: `node GCServer.js`
//*Courtesy of Nodejs.org*
var net = require('net');

var server = net.createServer(function (socket) {
    console.log('Client Connected');
    socket.write('Echo server');

    socket.on('data', function (data) {
        console.log('Server received: ' + data);	
    
        var status = socket.write(data);
        console.log('Sending status: ' + status);
    });
});

//**IMPORTANT:** Please plug in your local network IP address
var IP_ADDRESS = '0.0.0.0';
var port = 8338;

server.listen (port, IP_ADDRESS);

console.log ('listening at ' + IP_ADDRESS + ':' + port);

