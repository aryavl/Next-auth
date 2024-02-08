import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 8081;
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
app.get('/', (req, res) => {
    res.json({ message: "Hello" });
});

db.on('error',console.error.bind(console,"connection error")
)
db.once('open',()=>{
    console.log("mongodb connected"); 
    app.listen(process.env.PORT,()=>{
        console.log("connected TO ",`${process.env.PORT}`);
    })
})
