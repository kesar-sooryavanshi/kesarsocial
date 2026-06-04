const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// main route
app.post("/api/ask", (req, res) => {
  
  const { message } = req.body;

  let reply = "I am learning... 🤖";

  const text = message.toLowerCase(); // ✅ FIX

  if (text.includes("hello")) {
    reply = "Hello 👋 How can I help?";
  } 
  else if (text.includes("ai")) {
    reply = "AI means Artificial Intelligence";
  } 
  else if (text.includes("coding")) {
    reply = "Start with HTML, CSS, JavaScript 🚀";
  }

  res.json({ reply });
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});