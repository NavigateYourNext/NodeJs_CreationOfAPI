//Express is a framework to create api's. It is very robust, efficient, super high test coverage, HTTP Helpers

const express = require('express');
const app = express();

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

//Server Port
const serverPort = 3000;
app.listen(serverPort,function(){

    console.log("Server has started");

});


//Run file as
//node index.js -> it will start server then you can try as localhost:3000 with you api endpoint