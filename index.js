const { response } = require("express");
const express = require("express");
const app = express(); 
const port = 8080;
const morgan = require("morgan");

//middleware imports
const notFound = require('./middleware/notFound');
const errorHandeler = require('./middleware/errorHandler');
const errorHandler = require("./middleware/errorHandler");


// middleware wire up
app.use(morgan('dev')); 

app.get('/', (req, res) =>
{
    res.send("It works!");
})

app.get('/something', (req, res) =>{
    res.send("Something works");
});


app.get('/error', (req, res, next) => {
   const mockError = {
       status: 403,
       message: 'Something went wrong'
   }
   next(mockError);
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
});