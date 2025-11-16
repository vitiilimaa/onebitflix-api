import "dotenv/config";
import express from "express";
import { database } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import path from "path";
import router from "./routes";

// Variáveis temporárias, serão removidas.
process.env.TMPDIR = path.join(__dirname, "..", "uploads", "tmp");
process.env.TEMP = process.env.TMPDIR;

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use(adminJs.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  database
    .authenticate()
    .then(() => console.log("Conexão com o DB com sucesso!"));

  console.log(`Server iniciado na porta ${PORT}`);
});
