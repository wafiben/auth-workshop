const connectDb = require("./config/connectDb");
const express = require("express");
const app = express();
const articleRoute = require("./routes/articleRoute");
const adminRoute = require("./routes/adminRoute");
const authRout = require("./routes/authRoute");
const cors = require("cors");
const port = 9000;

app.use(cors());

app.use(express.json());
app.listen(port, (e) => {
  e
    ? console.log("server is failed")
    : console.log(`server is running on port ${port}`);
});
connectDb();
app.use("/api", authRout);
app.use("/api", articleRoute);
app.use("/api", adminRoute);
