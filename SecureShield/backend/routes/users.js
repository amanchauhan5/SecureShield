const express = require('express');
const { createUser, getallUsers, getUser, deleteUser, updateUser, loginUser } = require('../controllers/userControllers');
const router = express.Router();


router.get('/', getallUsers);

router.get('/:id', getUser);

router.post('/signup', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

router.post('/login', loginUser);
module.exports = router;
