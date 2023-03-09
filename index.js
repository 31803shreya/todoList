const express = require('express');
const app = express();
const port = 8000;
const path= require('path');
const connectDB=require('./config/mongoose');

// app.use(express.static(path.join('__dirname', "assets")));

app.use(express.static('assets'));
//set up the view enginr
 app.set('view engine','ejs');
 app.set('views','./views');



 app.use(express.urlencoded({extended: false}));

//use express router
app.use('/',require('./routes/index'));

const start = async() =>{
    try {
        const url = 'mongodb://localhost:27017/todo_list_db';
        await connectDB(url);
        app.listen(port,function(){
            console.log(`Server running at port: ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();


