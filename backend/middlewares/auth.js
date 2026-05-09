import jwt from 'jsonwebtoken';


const authUser = async(req,res,next) => {
    const {token} = req.headers;

    if(!token){
        res.json({success:false, message: "Not Authorized Login again"});
    }

    try{
        const decode_token = jwt.verify(token, process.env.JWT_SECRET);
         //now we will get the userid from that decoded token
         req.body.userId = decode_token.id;   //this line added the userId in the req.body which will now hit the backend app with this id
         next()   //it tells the JS to proceed to the endPoint

    }catch(error){
        console.log(error)
      res.json({success:false, message:error.message});
    }
}

export default authUser;
