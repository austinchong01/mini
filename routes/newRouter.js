// routes/newRouter.js
const express = require("express");
const router = express.Router();

// GET / - Home page
router.get("/", (req, res) => {
  res.render("new", { title: "New Message" });
});

router.post("/", (req, res) => {
  console.log("Form data received:", req.body);
  console.log("Author:", req.body.author);
  console.log("Message:", req.body.message);
  
  const newMessage = {
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  };
  
  req.messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;