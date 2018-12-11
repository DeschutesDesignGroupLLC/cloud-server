var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();
// Specify the connection string for your mongodb database
// and the location to your Parse cloud code
var api = new ParseServer({
    databaseURI: "mongodb://parse:Wzk0FiyHL3nN@mongo.deschutesdesigngroup.com:27017/parse-server",
    cloud: "/opt/deschutesdesigngroup/apps/parse/cloud/cloud.js",
    appId: "cfe3e2bf2ea8ecaae29c4ebb522cce42160b5e4f",
    masterKey: "5630adf1afd3fdf6f56c2792307e986856e0ae11",
    fileKey: "6511737841477fcd3e61eabe231cf8a73ae2a4db",
    serverURL: "https://cloud.deschutesdesigngroup.com/parse"
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
            serverURL: "https://cloud.deschutesdesigngroup.com/parse",
	    iconName: "deschutesdesigngroup.jpg"
        }
    ],
    users: [
        {
            user: "admin",
            pass: "$2y$12$MQIVdiepPF098NaGF3aM7uz5il7NqEbVqNQa.ZsJzqIRRAslBXnIO"
        }
    ],
    iconsFolder: "images",
    useEncryptedPasswords: true,
    trustProxy: true,
    cookieSessionSecret: "z0DP7aQ37Wv4gyqXkbtL"
});

// Prevent insecure connections
var allowInsecureHTTP = false;

// Serve the Parse Dashboard on the /parsedashboard URL prefix
app.use('/', dashboard);

var portdash = 4040;
app.listen(portdash, function() {
    console.log('parse-dashboard running on port ' + portdash);
});
