const express = require( "express");
const routes = require( "./routes.js");
const cors = require( "cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

//db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(8800, () => console.log("Servidor iniciado na porta 8800"));
