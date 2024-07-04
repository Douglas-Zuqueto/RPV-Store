require('dotenv/config'); // To read CLERK_API_KEY
const cors = require('cors')
const clerk = require('@clerk/clerk-sdk-node');
const express = require('express');
const port = process.env.PORT;
const app = express();
const produtoRouter = require('./routers/produtoRoutes.js')

const dbConnection = require("./db/dbConnection.js");

const db = require("./db/dbCreate.js");

db.initConnection(dbConnection);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use the strict middleware that raises an error when unauthenticated

// app.get("/");

// app.get(
//   "/produtos",
//   clerk.ClerkExpressRequireAuth(),
//   (req, res) => {
//     res.json(req.auth);
//     console.log(req.auth);
//   }
// );
console.log("cheguei no app")
app.use(produtoRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send("Unauthenticated!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
