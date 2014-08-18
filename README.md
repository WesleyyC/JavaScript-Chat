#JavaScriptChat

####Introduction
This is a chat room program with two JavaScript programs (server program and client program) run by node.js.

####About Node.js
As an asynchronous event driven framework, Node.js is designed to build scalable network applications and you can download it from [their website](http://nodejs.org/download/)

####Usage
Use `cd` directing to the folder where you put the two JavaScript File.

Install the net module and readline module: 

	
	$ sudo npm install net;
	
	$ sudo npm install readline;
	

Run server by: 

  	
  	$ node chat-server.js;
  	
  	
Run client by: 

	
  	$ node chat-client.js <username>;
  	
 
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
  	
	
