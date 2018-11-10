
const router = require('express').Router()                      // Using the .Router method of the express library
module.exports = router;                                        // Enables the export of the .Router method via a variable that holds it (ie router)

// Analogous to a database
let students =
[
    {id: 1, name: 'Dan', age: 20, grade: 4.0},
    {id: 2, name: 'Karen', age: 25, grade: 4.0},
    {id: 3, name: 'Corey', age: 30, grade: 4.0}
]

// Used for GETTING something that EXISTS
router.get('/', (req, res, next) => {
    try {
        res.json(
            students                                            // ??? is `return` required?
        );
    }
    catch (error) {
        next(error)
    }
})

// Used for GETTING something that EXISTS
router.get('/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        res.json(
            students.filter(elem => {                           // .filter method creates a NEW array w/ all elements that PASS the test implemented by the provided function
                                                                // .filter method works even if the ids don't match up w/ the indexes of the array
                                                                // each element of the array = a student
                if (elem.id === id) {
                    return elem;
                }
            })
        );
    }
    catch (error) {
        next(error)
    }
})

// Used for CREATING something NEW
router.post('/', (req, res, next) => {
    try {
        const newStudent = req.body;                            // An input that's passed in w/ the client's request from the front-end (eg a text field in a form that the client can type in the new student's info)
                                                                // req.body brings back an object
        students.push(newStudent);
        res.json(
            students
        );
    }
    catch (error) {
        next(error)
    }
})

// Used for UPDATING something that EXISTS
router.put('/:id', (req, res, next) =>  {
    try {
        const id = parseInt(req.params.id);
        const name = req.body.name;                             // client is sending an object and is possibly requesting an update of the name spelling
                                                                // req.body
        students.map(elem => {
            if (elem.id === id) {
                elem.name = name;
            }
        })
        res.json(
            students
        )}
    catch (error) {
        next(error)
    }
})

// Used for DELETING something that EXISTS
router.delete('/:id', (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        students = students.filter(elem => {                    // each element of the array = a student
            return elem.id !== id;
        })
        res.json(
            students
        );
    }
    catch (error) {
        next(error)
    }
})
