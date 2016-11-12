var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


var login = require("facebook-chat-api");

// Create simple echo bot


//do something every 42 seconds??
var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
rule.seconds = 10;

login({ email: "litreesofgreaterwashington@gmail.com", password: "davidarthi" }, function callback(err, api) {
    var j = schedule.scheduleJob(rule, function () {
        
        if (err)
            return console.error(err);
        
        var momID = 100000225248771;
        
        api.getUserID("Stephan Loh", function (err, data) {
            if (err) return callback(err);
            
            // Send the message to the best match (best by Facebook's criteria)
            var threadID = data[0].userID;
            var msg = { body: "Hey mom, how are you today?" };
            api.sendMessage(msg, threadID);

      //api.sendMessage(msg, momID);
        });
    });
});
