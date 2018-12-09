var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
    databaseURI: "mongodb://parse-server:Wzk0FiyHL3nN@jsdh@10.0.2.253:27017/parse-server",
    cloud: "./node_modules/parse-server/lib/cloud-code/Parse.Cloud.js",
    appId: "cfe3e2bf2ea8ecaae29c4ebb522cce42160b5e4f",
    masterKey: "5630adf1afd3fdf6f56c2792307e986856e0ae11",
    fileKey: "6511737841477fcd3e61eabe231cf8a73ae2a4db",
    serverURL: "http://54.200.185.166:80/parse"
});
// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

var port = 1337;
app.listen(port, function() {
    console.log('parse-server running on port ' + port);
});

//Parse Dashboard
var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard({
    apps: [
        {
            appName: "PERSCOM Cloud Integration",
            appId: "cfe3e2bf2ea8ecaae29c4ebb522cce42160b5e4f",
            masterKey: "5630adf1afd3fdf6f56c2792307e986856e0ae11",
            fileKey: "6511737841477fcd3e61eabe231cf8a73ae2a4db",
            production: true,
            serverURL: "http://54.200.185.166:80/parse"
        }
    ],
    users: [
        {
            user: "user",
            pass: "Wzk0FiyHL3nN"
        }
    ], useEncryptedPasswords: false
});

var allowInsecureHTTP = true;

// Serve the Parse Dashboard on the /parsedashboard URL prefix
app.use('/', dashboard);

var portdash = 4040;
app.listen(portdash, function() {
    console.log('parse-dashboard running on port ' + portdash);
});