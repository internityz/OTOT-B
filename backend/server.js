import express from "express";
import bodyParser from "body-parser";
import routes from "./routes.js";
import cors from "cors";

// Instantiate express
const app = express();

app.use(express.static());
app.use(cors()); // config cors so that front-end can use
// Set our port
const port = process.env.PORT || 8000;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register our routes in app
app.use("/", routes);
// Start our server

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;
