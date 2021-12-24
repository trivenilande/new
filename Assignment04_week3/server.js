const express=require('express');
const app=express();
const port =3000;


app.get('/',(req,resp)=>{
    resp.send("Home Page");
}) 
app.get('/index.html',(req,resp)=>{
    resp.sendFile(__dirname+"/index.html");
});
app.get('/success',(req,resp)=>{
    resp.sendFile(__dirname+"/success.html");
});

app.get('/error.html',(req,resp)=>{
    resp.sendFile(__dirname+"/error.html");
});
app.listen(port,()=>{
    console.log(`http://localhost:${port} Express server started `);;
})

