const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const message = process.env.MESSAGE || "Hello World!";

app.get("/", (req, res) => {
  res.send(message);
});

// Um endpoint que seria para testar a saúde da aplicação. A ideia é que verifique se a aplicação está rodando corretamente.
// Acessando os recursos da aplicação, como banco de dados, cache, etc.
app.get("/health-check", (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running ON port ${port}`);
})