const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [{
    resource: { type: String, required: true }, // e.g., 'properties', 'leads', 'contracts'
    actions: [{ type: String }], // 'create', 'read', 'update', 'delete'
  }],
  description: String,
  isActive: { type: Boolean, default: true }
});

const Role = mongoose.model('Role', roleSchema);