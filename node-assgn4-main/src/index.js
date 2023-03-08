const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const port = 5000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())

app.post("/add", (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log(typeof num1, typeof num2);
      return res.status(403).json({ error: "invalid datatypes" });
    }
    if (num1 < -1000000 || num2 < -1000000) {
      return res.status(403).json({ error: "UNderflow" });
    }
    if (num1 > 1000000 || num2 > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }
    const sum = num1 + num2;
    if (sum > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }

    if (sum < -1000000) {
      return res.status(403).json({ error: "Underflow" });
    }

    return res
      .status(200)
      .json({ message: "The sum of given numbers", result: sum });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
});

app.post("/divide", (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log(typeof num1, typeof num2);
      return res.status(403).json({ error: "invalid datatypes" });
    }
    if (num1 < -1000000 || num2 < -1000000) {
      return res.status(403).json({ error: "UNderflow" });
    }
    if (num1 > 1000000 || num2 > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }
    if (num2 === 0) {
      return res.status(403).json({ error: "Cannot divide by zero" });
    }
    const div = num1 / num2;

    return res
      .status(200)
      .json({ message: "The division of given numbers", result: div });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
});

app.post("/multiply", (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log(typeof num1, typeof num2);
      return res.status(403).json({ error: "invalid datatypes" });
    }
    if (num1 < -1000000 || num2 < -1000000) {
      return res.status(403).json({ error: "Underflow" });
    }
    if (num1 > 1000000 || num2 > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }
    const mul = num1 * num2;
    if (mul > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }

    if (mul < -1000000) {
      return res.status(403).json({ error: "Underflow" });
    }

    return res
      .status(200)
      .json({ message: "The product of given numbers", res: mul });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
});

app.post("/sub", (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log(typeof num1, typeof num2);
      return res.status(403).json({ error: "invalid datatypes" });
    }
    if (num1 < -1000000 || num2 < -1000000) {
      return res.status(403).json({ error: "Underflow" });
    }
    if (num1 > 1000000 || num2 > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }
    const sub = num1 - num2;
    if (sub > 1000000) {
      return res.status(403).json({ error: "Overflow" });
    }

    if (sub < -1000000) {
      return res.status(403).json({ error: "Underflow" });
    }

    return res
      .status(200)
      .json({ message: "the difference of given two numbers", res: sub });
  } catch (error) {
    return res.status(500).json({ error: "internal server error" });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
