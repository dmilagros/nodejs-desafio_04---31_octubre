import express from "express";

import { routerCarts } from "./routes/carts.router.js";
import { routerProducts } from "./routes/products.router.js";
import { __dirname } from "./utils.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//archivos publicos
app.use(express.static(__dirname + "/public"));

//ENDPOINT TIPO API CON DATOS CRUDOS EN JSON
app.use("/api/products", routerProducts);
app.use("/api/carts", routerCarts);

app.get("*", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "error esa ruta no existe",
    data: {},
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});