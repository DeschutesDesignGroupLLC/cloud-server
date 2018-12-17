// Require express
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

// Set our db URI
var perscomUri = process.env.PERSCOM_URI || process.env.MONGODB_URI;
if (!perscomUri) {
    console.log('Mongo URI not specified, falling back to localhost.');
}

// Start our parse server for PERSCOM
var perscom = new ParseServer({
    databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
    cloud: process.env.PERSCOM_CLOUD || __dirname + '/cloud/cloud.js',
    appId: process.env.PERSCOM_APP_ID,
    masterKey: process.env.PERSCOM_MASTER_KEY,
    fileKey: process.env.PERSCOM_FILE_KEY,
    serverURL: process.env.PERSCOM_SERVER_URL || 'http://localhost:1337/parse'
});

// Start our express instance
var app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the perscom API on the MOUNT variable or /parse URL prefix
var mountPath = process.env.PERSCOM_MOUNT || '/parse';
app.use(mountPath, perscom);

// Provide a path for health checks
app.get('/status', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/status.html'));
});

// Set the port the app will be listening on
var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('Parse server running on port ' + port + '.');
});

// Dashboard options
var options = {
    allowInsecureHTTP: true,
    cookieSessionSecret: "z0DP7aQ37Wv4gyqXkbtL"
};

// Parse Dashboard
var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard( {
    apps: [
        {
            appName: "PERSCOM Cloud Integration",
            appId: process.env.PERSCOM_APP_ID,
            masterKey: process.env.PERSCOM_MASTER_KEY,
            fileKey: process.env.PERSCOM_FILE_KEY,
            production: process.env.PERSCOM_PRODUCTION || false,
            serverURL: process.env.PERSCOM_SERVER_URL,
	        iconName: "deschutesdesigngroup.jpg"
        }
    ],
    users: [
        {
            user: "admin",
            pass: "$2y$12$MQIVdiepPF098NaGF3aM7uz5il7NqEbVqNQa.ZsJzqIRRAslBXnIO"
        }
    ],
    iconsFolder: "public/images",
    useEncryptedPasswords: true,
    trustProxy: true,
}, options );

// Serve the Parse Dashboard on the / URL prefix
app.use('/', dashboard);

// Server the dashboard up on the env var port
var portdash = process.env.PARSE_DASHBOARD_PORT || 4040;
app.listen(portdash, function() {
    console.log('Parse dashboard running on port ' + portdash);
});