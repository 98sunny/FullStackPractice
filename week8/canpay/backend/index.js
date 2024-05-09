const express=require('express');
const bodyParser=require('body-parser');


const app=express();

// imported user Router
const mainRouter=require('./routes/index');
// all requests with /api/vi/user will go to userRouter
app.use("/api/v1",mainRouter);

const PORT=3000;
app.listen(PORT, ()=>{
    console.log("Server is running at port 3000");
});