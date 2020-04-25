//Express is a framework to create api's. It is very robust, efficient, super high test coverage, HTTP Helpers

//Run file as
//node index.js -> it will start server then you can try as localhost:3000 with you api endpoint


const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//Here we are configuring Express to use body-parsers as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server Port -- Create Express Server
const serverPort = 3000;
app.listen(serverPort,function(){

    console.log("Server has started on port "+serverPort);

});

//Creation of data
const dataonServer = [

    {
      'id': 1,
      'Name': 'Pradip Shete',
      'Mob' : 12345
    },
    {
        'id': 2,
        'Name': 'Sangita Shete',
        'Mob' : 123456

    },
    {
      'id': 3,
      'Name': 'Akshay Shete',
      'Mob' : 123457
    },

];

//Creation of end-points
app.get('/api/userdetails',function(req,res){

    res.json(dataonServer);


});

app.get('/api/user/:id',function(req,res)
{
    const userID = req.params.id;
    const specificUserDetails = dataonServer.find(specificUserDetails => specificUserDetails.id == userID);

    if(specificUserDetails)
    {
        res.json(specificUserDetails); 
    }
    else
    {
        res.send("Invalid User Id");
    }
});

app.get('/getHTML',function(req,res){
    res.sendfile("index.html");
});

app.post('/login',function(req,res){
    var username=req.body.user;
    var password=req.body.pass;
    console.log("User name = "+username+", password = "+password);
    res.end("done");
  });