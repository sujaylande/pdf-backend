const mongoose = require("mongoose");

// const documentSchema = new mongoose.Schema({
//   filename: { type: String, required: true },
//   textContent: { type: String, required: true },
//   uploadedAt: { type: Date, default: Date.now },
// });

//module.exports = mongoose.model("Document", documentSchema);


const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  textContent: { type: String, required: true },
  queryHistory: [
    {
      question: String,
      answer: String,
      context: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model("Document", documentSchema);
