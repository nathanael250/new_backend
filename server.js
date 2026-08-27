const express = require('express');
const db = require('./config/db')
const app = express();
app.use(express.json());

const PORT = 8000;


app.post('/create_firm', (req,res)=>{
    const {firmName, contactName, Phone,Email} = req.body;
    const statement = "INSERT INTO firm(firmName, contactName, phone, email) VALUES (?,?,?,?)";
    db.query(statement,[firmName, contactName, Phone,Email],(error)=>{
        if (error){
            res.send("something went wrong");
            return;
        }
        res.send("Firm created successfully");
    })

})
app.put('/update_firm/:id',(req,res)=>{

    console.log("update was called");
    const {id} = req.params;
    const {firmName, contactName, Phone,Email} = req.body;
    
    const statement = "UPDATE firm SET firmName = ?, contactName=? , phone=? , email=? where firmId = ?";
    db.query(statement,[firmName, contactName, Phone, Email,id],(error)=>{
        if(error){
            res.send("Faill!")
            return;
        }
        res.send("Update successfully!");
    })
})


app.delete('/delete_firm/:firmId',(req,res)=>{
    const {firmId} = req.params;
    const statement = "DELETE FROM firm WHERE firmId = ?";
    db.query(statement,[firmId],(error)=>{
        res.send("Something went wrong")
    })
    res.send("Deleted successfully")
})

app.get('/get_firm',(req,res)=>{
    const statement = "SELECT * FROM firm";
    db.query(statement,(error,result)=>{
        if(error){
            res.send("Something went wrong");
            return;
        }
        res.json(result);
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

