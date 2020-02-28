// Importing the packages
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Connection
mongoose.connect("mongodb://localhost/comfort-zone");
let db = mongoose.connection;

// Checking connection
db.once("open", () => console.log("Connected to MongoDb"));

// Checking for DB errors
db.on("errors", err => console.log(err));

// Importing all routes
const users = require("./routes/api/users");
const ads = require("./routes/api/ads");
const complains = require("./routes/api/complains");
const funds = require("./routes/api/funds");
const issues = require("./routes/api/issues");
const bills = require("./routes/api/bills");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ encoded: false }));

// Setting a static folder
app.use(express.static(path.join(__dirname, "public")));

// Whitelisting IPs
app.use(cors());
var whitelist = ["http://localhost:3000"];

// Setting all routers
app.use("/api/users", users);
app.use("/api/ads", ads);
app.use("/api/complains", complains);
app.use("/api/funds", funds);
app.use("/api/issues", issues);
app.use("/api/bills", bills);

// Setting the PORT
const PORT = process.env.PORT || 5000;
// Listening to port
app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
