const express = require("express");

const app = express();

const port = 3333;

app.get('/', (req,res) => {
  res.send("Ola mundo")
});

app.listen(port , () => {
  console.log(`Escutando a porta ${port}`)
})
