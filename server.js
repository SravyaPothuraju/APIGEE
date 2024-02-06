const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api", (req, res) => {
  const { name, dob, username } = req.body;

  if (!name || !dob || !username) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (
    name === "John Doe" &&
    dob === "01-01-1990" &&
    username === "john@example.com"
  ) {
    const doj = new Date().toLocaleDateString("en-GB");
    const id = generateRandomId();
    const responseJson = {
      id,
      name,
      dob,
      doj,
    };
    return res.status(200).console.log("super ra");
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    return res.status(400).json({ error: "Name must contain only alphabets" });
  }

  const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
  if (!dateRegex.test(dob)) {
    return res.status(400).json({ error: "must contain in dd-mm-yyyy format" });
  }

  const existingUsernames = new Set(["existing@example.com"]);
  if (existingUsernames.has(username)) {
    return res.status(409).json({ error: "Username already exists" });
  }
  const doj = new Date().toLocaleDateString("en-GB");

  const id = Math.floor(Math.random() * 1000);

  const responseJson = {
    id,
    name,
    dob,
    doj,
  };

  res.json(responseJson);
});

app.listen(11485, () => console.log("Server running...."));
