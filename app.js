
// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');





// Routes
const Student = require('./routes/student');
const Test = require('./routes/student');




// Init App
const app = express();





// Basic Middleware
app.use('/', bodyParser.json());                             // .use tells us to use this file for the incoming requests from the client (eg '/students')
app.use('/', bodyParser.urlencoded({ extended: true }));
app.use('/', morgan('dev'));                                // Also:          app.use(morgan('dev'));
app.use('/student', Student);                               // Also:          app.use('/student', require('./routes/student')) -> .use & require used in 1 line
app.use('/test', Test);                                     // Also:          app.use('/test', require('./routes/test')) -> .use & require used in 1 line




// Err-handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
      .status(500)
      .send('Something broke!');
});





// Listen on server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
