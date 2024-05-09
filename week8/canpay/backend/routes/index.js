const express=require('express');

const router=express.Router();
const cors=require('cors');



const userRouter=require('./user');
const accountRouter=require('./account');
router.use("/user",userRouter);
router.use("/account",accountRouter);



app.use(cors());
app.use(express.json());