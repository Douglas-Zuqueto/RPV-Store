import 'dotenv/config'; // To read CLERK_API_KEY
import { ClerkExpressRequireAuth, } from "@clerk/clerk-sdk-node";
import express from "express";
import cors from "cors";

const port = process.env.PORT;
const app = express();
app.use(cors());
// Use the strict middleware that raises an error when unauthenticated

app.get(
  "/protected-endpoint",
  ClerkExpressRequireAuth(),
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