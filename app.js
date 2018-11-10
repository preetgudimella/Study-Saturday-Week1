
// Require Dependencies                                       // ??? do these then get added to package.json?
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');




// Routes
const router = require('/route/student')




// Init App
const app = express();




// Middleware (basic)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/student', require('./route/student.js'))          // to prevent having too much code in the app.js file, add methods in a separate file (eg student .js) then access it in app.js using require
                                                            // app.use -> anytime client inputs '/student' -> require the code in file student.js


                                                        


// Mount Router
app.use('/students', router)





// Middleware (error-handling)                              // Put this at the bottom as a catch all
app.use((err, req, res, next) {
  console.error(error.stack);
  res.status(500).send('Something broke!')
})

// Listen on server
const PORT = 3000
app.listen(PORT, () => {
  console.log('Server is listening on port 3000!');
});
