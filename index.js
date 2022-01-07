const { response } = require("express");
const express = require("express");
const app = express(); 
const port = 8080;
const morgan = require("morgan");

//middleware imports
const notFound = require('./middleware/notFound');
const errorHandeler = require('./middleware/errorHandler');
const errorHandler = require("./middleware/errorHandler");
const userRouter = require('./routers/user.router');
const bodyParser = require('body-parser');

// middleware wire up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); 

app.use('/users', userRouter);



app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});