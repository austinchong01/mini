// routes/indexRouter.js
const express = require("express");
const router = express.Router();

// GET / - Home page
router.get("/", (req, res) => {
  res.render("index", { 
    title: "Mini Messageboard", 
    messages: req.messages 
  });
});

// GET /message/:id - Individual message details
router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = req.messages[messageId];
  
  if (!message) {
    return res.status(404).send("Message not found");
  }
  
  res.render("message-details", {
    title: "Message Details",
    message: message,
    messageId: messageId
  });
});

module.exports = router;