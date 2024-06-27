require('dotenv').config(); // Para ler CLERK_API_KEY
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const express = require('express');
require('cors');

const port = process.env.PORT || 3000
const app = express()

// Use the strict middleware that raises an error when unauthenticated
app.get('/protected-endpoint', ClerkExpressRequireAuth(), (req, res) => {
  res.json(req.auth)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})