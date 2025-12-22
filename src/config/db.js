let mysql=require("mysql2");
let config=require("dotenv").config();

const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mysql"
    
});
db.connect((err)=>{
    if(err)throw err;
    else{
    console.log("Connected to the database successfully.");
    }
});

module.exports=db;