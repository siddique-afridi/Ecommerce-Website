import userModel from '../models/userModel.js'

// add products to user cart
const addToCart= async(req,res) => {
    try{
        const {userId, itemId, size} = req.body;
          
        //here userData will contain the specific user Document
        const userData = await userModel.findById(userId); 
        //here cartData contains the actual cartData from DB of that user
        let cartData = await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;

            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
            //here we updata the user cartdata
        await userModel.findByIdAndUpdate(userId, {cartData});

        res.json({success:true, message: "Added to cart"})


    }catch(error){
       console.log(error)
        res.json({success:false, message: error.message})
    }
    
}


const updateCart= async(req,res) => {
    try{
        

    }catch(error){

    }


}


const getUserCart= async(req,res) => {


}


export {addToCart,updateCart,getUserCart}