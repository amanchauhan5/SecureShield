const express = require('express');
const { createPolicy, getPolicies, getPolicy, deletePolicy, updatePolicy } = require('../controllers/policyController');
const router = express.Router();


// Get all the policies
router.get('/', getPolicies);

//Get a particular claim
router.get('/:id', getPolicy);

//Post new plan
router.post('/', createPolicy);

//
router.delete('/:id', deletePolicy);

router.patch('/:id', updatePolicy);

module.exports = router;
