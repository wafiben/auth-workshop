const connectDb = require("./config/connectDb");
const express = require("express");
const app = express();
const port = 9000;
const authRout = require("./routes/authRoute");
app.use(express.json());
app.listen(port, (e) => {
  e
    ? console.log("server is failed")
    : console.log(`server is running on port ${port}`);
});
connectDb();
app.use("/api", authRout);
