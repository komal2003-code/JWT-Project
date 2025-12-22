/*let app=require("./src/app");

require('dotenv').config();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});
*/
const express = require("express");
const app = require("./src/app"); // or wherever your app.js is
const router = require("./src/routes/routes"); // adjust path as needed

app.use("/", router); // Register routes under /
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
