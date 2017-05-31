const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const api = require('./server/routes/api');
const port = 3000;

app.use(bodyParser());
app.use(express.static(path.join(__dirname,'dist')));

app.use("/api",api);

app.get("*", function(req, resp){
	resp.sendFile(path.join(__dirname,"dist/index.html"));
});

app.listen(port, function(){
	console.log("Listening to port: "+ port);
});

