#JavaScriptChat

####Introduction
This are two JavaScript programs (server program and client program) run by node.js serving as chat room.

####Usage
Need to install the net module and readline module first: 

	
	$sudo npm install net;
	
	$sudo npm install readline;
	

Run server by: 

  	
  	$node chat-service.js;
  	
  	
Run client by: 

	
  	$node chat-client.js <username>;
  	
 
####Notice
To connect to the server, change the line of `chat-client.js`:
```javascript
client = net.connect({host:'localhost', port: 5000})
```
to 
```javascript
client = net.connect({host:<Server Computer IP Address>, port: 5000})
```

####Contact
Author: Wesley Wei Qian <wesley.chin0919@gmail.com>
  	
	
