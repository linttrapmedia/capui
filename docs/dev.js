import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 3000;

app.use(express.static("client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
