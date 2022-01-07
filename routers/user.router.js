const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


const users = [new User('James', 47),
                new User('Jennifer', 29),
                new User('Alice', 50)]; 

// GET  /users -> give all of the users
router.get('/', (req, res)=>{
    res.status(200).json({
        users: users
    });
}); 

// GET /users/:id -> find one user by their id
router.get('/:id', (req, res)=>{
   const user = users.filter(user =>{
    return user.id === req.params.id;
   });
    res.status(200).json({
        users: user
    });
}); 

// POST /users -> create a new user
router.post('/', (req, res)=>{
    const {name, age} = req.body;
    const user = new User(name, age);
    users.push(user);
    res.status(201).json({
        message: 'New user has been created'
    })
}); 
// PUT /users/:id -> update user by id
router.put('/:id', (req, res)=>{
    const update = `User: ${Math.floor(Math.random() * 1000)}`;
    users[req.params.id] = update;
    res.status(200).json({
        Message: "User has been updated"
    });
}); 

// DELETE /users/:id -> delete by id
router.delete('/:id', (req, res)=>{
    users.splice(req.params.id,1);
    res.status(200).json({
        message: "User has been deleted"
    });
}); 


module.exports = router;
