const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policyType: {
    type: String,
    required: true
  },
  policyName: {
    type: String,
    required: true
  },
  policyNumber: {
    type: String,
    unique: true,
    required: true
  },
  coverageDetails: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  premium: {
    type: String,
    required: true
  },
  insuredName: {
    type: String,
    required: true
  },
  insuredAddress: {
    type: String,
    required: true
  },
  insuredPhone: {
    type: String,
    required: true
  },
  insuredEmail: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
