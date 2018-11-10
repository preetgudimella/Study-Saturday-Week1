// index.js takes in all the imports via require
// index.js EXports to whatever files IMports them (tends to be app.js)
/*
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"                                           // the 'npm start' that can be used in the terminal
},
*/

/*
  "dependencies": {
    "body-parser": "^1.18.2",                                           // npm install body-parser -> puts this into the dependencies object of package.json
    "express": "^4.16.2",                                               // npm uninstall body-parser -> removes this from the dependencies object of package.json
    "morgan": "^1.9.0",
    "nodemon": "^1.17.1"
  }
*/


// Express routes
const router = require('express').Router();                                         // require is analogous to IMport
                                                                                    // .Router() allows us to have a modular file system




// Export routes
module.exports = router;                                                            // module.exports allows us to EXport the modular file system we are in





// Create test models
let tests =
[
    { id: 1, subject: 'English', score: 80, studentId: 1 },
    { id: 2, subject: 'English', score: 90, studentId: 1 },
    { id: 3, subject: 'English', score: 100, studentId: 1 }
]





// Get Test
router.get('/', (req, res, next) => {
    try {
        res.json(
            { test }
        )
    } catch (error) {
        console.log(error);
    }

  });
  




  // Get Test by Id
  router.get('/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        let student = tests.filter(person => {
            return person.id === id;
                res.json(
                    { test }
                );
        })
    } catch (error) {
        console.log(error);
    }
  });
  




  // Add Test
  router.post('/', function(req, res, next) {
    try {
        const testToAdd = req.body;
        tests.push(req.body)
        res.json(
            tests
        )
    } catch (error) {
        console.log(error);
    };
  });
  




  // Delete Test
  router.delete('/:id', function(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        tests = tests.filter(test => {
            return test.id !== id;
        })
        req.json(

        )
    } catch (error) {
        console.log(error);
    }
  });
  




  // Update Test
  router.put('/:id', function(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const testScore = req.body.score;
        testToUpdate = tests.filter(test => {
            return test.id === id;
        })
        testToUpdate[0].score = testScore;                              // testToUpdate[0] since each .filter method is going through each element of the array, which has a length of 1
        res.json(
            testToUpdate[0]
        )
    }
    catch (error) {
        console.log(error);
    }
})
  









// Get all students
router.get('/', (req, res, next) => {
    try {
        res.json(
                test
            )
    }
    catch (error) {
        console.log(error);
    }
})





// Get all test scores
router.get('/', (req, res, next) => {
    try {
        
        res.json(

        )
    }
    catch (error) {
        console.log(error);
    }
})





// Update student name
router.put('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error)
    }
})





// Update test score
router.put('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error)
    }
})





// Get mean test score by student ID
router.get('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error)
    }
})





// Get top scoring student
router.get('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error)
    }
})





// Delete Student
router.delete('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error);
    }
})





// Delete Score
router.delete('/', (req, res, next) => {
    try {
        res.json(

        )
    }
    catch (error) {
        console.log(error);
    }
})


- Add Student

- Add Score