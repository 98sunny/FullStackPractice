const express=require("express");
const authMiddleware=require("../middleware/middleware")
const jwt=require("jsonwebtoken");


const router=express.Router();

const {User}=require("../database/index")


const {JWT_SECRET}=require("../config");

const zod=require('zod');



router.post("/signup",async (req,res)=>{
    const signupBody=zod.object({
        username: zod.string.email(),
        password: zod.string.min(6),
        firstname: zod.string.max(50),
        lastname: zod.string.max(50)
    })

    // validate
    const {success}=signupBody.safeParse(req.body);
    if(!success){
        res.status(411).json({message:"Email already taken/Incorrect inputs"})
    }
    const user=await User.create({
        firstname: firstname,
        lastName: lastname,
        username: username,
        password: password,
    });
    
    const userId=user._id;
    
    const token=jwt.sign({userId},JWT_SECRET);
    
    res.json({
        message: "User create successfully",
        token: token
    });


});

router.post("signin",(req,res)=>{
    const signinBody=zod.object({
        username: zod.string.email(),
        password: zod.string.min(6)
        
    })
    // validate
    const {success}=signinBody.safeParse(req.body);
    
    const user=User.find({username: username, password: password});
    console.log(user+ "is found");
    if(user){
        const token=jwt.sign({username},JWT_SECRET);
        res.json({
            "token":token
        })

    }else{
        res.status(411).json({
            message: "Incorrect email and pass"
        })

    }

});

const updateBody=zod.object({
    
    password: zod.string.min(6).optional(),
    firstname: zod.string.max(50).optional().optional(),
    lastname: zod.string.max(50).optional()
})

router.put("/",authMiddleware,async (req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Error while updating information"
        })
    }
    await User.updateOne(req.body,{
        id:req.userId
    })
    res.json({
        message: "Updated information successfully"
    })




})

router.get("/bulk", async (req, res) => {
    const filter=req.query.filter || "";
    const users=await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        },{
            lastname: {
                "$regex": filter
            }
        }
        ]
    })
    res.json({
        user:users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})




module.exports=router;