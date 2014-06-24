
'use strict';

var peers = [];

const  
  fs = require('fs'),
  net = require('net'),
  
  server = net.createServer(function(connection) {

    // create list of connections
    peers.push(connection);
    
    // reporting
    console.log('Subscriber connected: '+ connection.remoteAddress);
    
    // listening
    connection.on('data', function(data) 
    {
        let message = JSON.parse(data);

        if (message.type === 'greeting') 
        {
          let username = message.name;
          console.log(username + " is online.");
          connection.write(JSON.stringify({type: 'welcome', name: username}) + '\n');
        } 
        else if (message.type == 'chat')
        {
          let sender = message.name;
          let chatContent = message.messages;
          console.log(sender + " says: " + chatContent);
          broadcastMsg(sender, chatContent);
        }
        else 
        {
          throw Error("Unrecognized message type: " + message.type);
        }
    });

    // loop out the information
    var broadcastMsg = function(sender, chatContent){
      var newPeers = [];
      
      for(var i=0; i<peers.length; i++){
          try{
              peers[i].write(JSON.stringify({type:"chat", name:sender, messages: chatContent}) + '\n');
              newPeers.push(peers[i]);
          }
          catch(err){
              console.log("Error sending to connection."+JSON.stringify(err));
          }
      }
      peers = newPeers;
    }


    // cleanup
    connection.on('close', function() {
      console.log('Subscriber disconnected.');
    });

  });

  server.listen(5000, function() {
    console.log('Listening for subscribers...');
  });

