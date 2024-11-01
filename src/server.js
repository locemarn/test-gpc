const express = require('express')

const app = express();

app.use(express.json());
// app.use('/api', (req, res) => userRouter)

app.get("/", (req, res) =>
  res.status(200).json({ message: "everything works!" })
);

app.use('/api', require('./controller/user'))

app.listen(process.env.PORT || 8080, console.info("server running on port: 8080"));
