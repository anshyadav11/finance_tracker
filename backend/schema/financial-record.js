const mongoose = require("mongoose");

const FinancialRecordSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
});
const financialRecordModel = mongoose.model('financialRecord', FinancialRecordSchema);

module.exports = financialRecordModel;
