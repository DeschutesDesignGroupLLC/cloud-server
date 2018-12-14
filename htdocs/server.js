// Require express
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

// Start our parse server using enviroment variables for our config settings
var api = new ParseServer({
    databaseURI: process.env.PARSE_SERVER_DATABASE_URI,
    cloud: process.env.PARSE_SERVER_CLOUD,
    appId: process.env.PARSE_SERVER_APPLICATION_ID,
    masterKey: process.env.PARSE_SERVER_MASTER_KEY,
    fileKey: process.env.PARSE_SERVER_FILE_KEY,
    serverURL: process.env.PARSE_SERVER_URL
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Server the server up on port set in enviroment variables
var port = process.env.PARSE_SERVER_PORT;
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

// Allows insecure connections because SSL is being terminated at AWS ELB
var allowInsecureHTTP = true;

// Serve the Parse Dashboard on the /parsedashboard URL prefix
app.use('/', dashboard);

// Server the dashboard up on the env var port
var portdash = process.env.PARSE_DASHBOARD_PORT;
app.listen(portdash, function() {
    console.log('parse-dashboard running on port ' + portdash);
});
