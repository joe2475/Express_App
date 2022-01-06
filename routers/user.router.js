const express = require('express');
const router = express.Router();

// GET  /users -> give all of the users
router.get('/', (req, res)=>{}); 

// GET /users/:id -> find one user by their id
router.get('/:id', (req, res)=>{}); 

// POST /users -> create a new user
router.post('/', (req, res)=>{}); 
// PUT /users/:id -> update user by id
router.put('/:id', (req, res)=>{}); 

// DELETE /users/:id -> delete by id
router.delete('/:id', (req, res)=>{}); 


module.exports = router;