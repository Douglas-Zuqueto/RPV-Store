require('dotenv/config'); // To read CLERK_API_KEY
const cors = require('cors')

const clerk = require('@clerk/clerk-sdk-node')
const express = require('express');
const port = process.env.PORT;
const app = express();

const dbConnection = require("./db/dbConnection.js");

const db = require("./db/dbCreate.js");

db.initConnection(dbConnection);

app.use(cors());
// Use the strict middleware that raises an error when unauthenticated

app.get("/", )

app.get(
  "http://localhost:3000/protected-endpoint",
  clerk.ClerkExpressRequireAuth(),
  (req, res) => {
    res.json(req.auth);
    console.log(req.auth);
  }
);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});