const Policy = require('../models/policiesModel');
const mongoose = require('mongoose');

// Get all policies
const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find({}).sort({ createdAt: -1 });
    res.status(200).json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a single policy
const getPolicy = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such policy" });
  }

  try {
    const policy = await Policy.findById(id);

    if (!policy) {
      return res.status(404).json({ error: "No such policy available" });
    }
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new policy
const createPolicy = async (req, res) => {
  const {
    policyType,
    policyName,
    policyNumber,
    coverageDetails,
    term,
    premium,
    insuredName,
    insuredAddress,
    insuredPhone,
    insuredEmail
  } = req.body;

  // Adding to db
  try {
    const policy = await Policy.create({
      policyType,
      policyName,
      policyNumber,
      coverageDetails,
      term,
      premium,
      insuredName,
      insuredAddress,
      insuredPhone,
      insuredEmail,
    });
    res.status(201).json(policy); // Changed status code to 201 for resource creation
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a policy
const deletePolicy = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such policy" });
  }

  try {
    const policy = await Policy.findOneAndDelete({ _id: id });

    if (!policy) {
      return res.status(404).json({ error: "No such policy" });
    }
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a policy
const updatePolicy = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such policy" });
  }

  try {
    const policy = await Policy.findOneAndUpdate({ _id: id }, {
      ...req.body
    }, { new: true });

    if (!policy) {
      return res.status(404).json({ error: "No such policy" });
    }
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPolicies,
  createPolicy,
  getPolicy,
  deletePolicy,
  updatePolicy
};
