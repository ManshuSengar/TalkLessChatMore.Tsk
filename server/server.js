require('dotenv').config();

const express=require('express');
const app=express();
const chats =require('./data/data');

var PORT=5500 || process.env.PORT;
app.get('/',(req,res)=>{
    res.send('hello World');
})
app.get('/api/chat',(req,res)=>{
    res.json(chats);
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})