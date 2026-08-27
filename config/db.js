const mysql = require('mysql2')

//myslq database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"money_lending"
})

db.connect((error)=>{
    if(error){
        console.log("Connect faill:", error);
        return;
    }
    console.log("connection done")

})

module.exports = db;

