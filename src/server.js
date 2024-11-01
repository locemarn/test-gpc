const express = require('express')

const app = express();

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).json({ message: "everything works!" })
);

app.listen(8080, console.info("server running on port: 8080"));
