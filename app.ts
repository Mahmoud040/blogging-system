import express, { Express } from "express";
import dbroutes from "./src/routes/dbroutes";
import path from "path";
import { sequelize } from "./database";
import "reflect-metadata";
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use("/api", dbroutes);
const port = 8000;

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
async function startServer() {
  try {
    await sequelize.sync({ force: true });

    console.log("Server started successfully.");
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();

export default app;
