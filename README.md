#JavaScriptChat [![Code Climate](https://codeclimate.com/repos/54c43d5a695680671e0000cf/badges/98194cc5f2799326f66b/gpa.svg)](https://codeclimate.com/repos/54c43d5a695680671e0000cf/feed)

This is a chat room program with two JavaScript programs (server program and client program) run by node.js.

####Screenshoot
![ScreenShootMain](http://i.imgur.com/JBXbF2D.jpg)

####About Node.js
As an asynchronous event driven framework, Node.js is designed to build scalable network applications and you can download it from [their website](http://nodejs.org/download/) or use [Homebrew](http://brew.sh/).

####Usage
Use `cd` directing to the folder where you put the two JavaScript File.

Install the net module and readline module: 

	
	$ sudo npm install net;
	
	$ sudo npm install readline;
	

Run server by: 

  	
  	$ node --harmony chat-server.js;
  	
  	
Run client by: 

	
  	$ node --harmony chat-client.js <username>;
  	
 
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
  	
	
