import { createContext, useState,useEffect } from 'react'
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
     const currency = "$";
     const delivery_fee = 10;
     const [search, setSearch]= useState('');
     const [showSearch, setShowSearch] = useState(false);
     const [cartItems, setCartItems] = useState({});
     const navigate = useNavigate()


     const addToCart = async(itemId, size)=> {
        if(!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){       //it(line24) looks for the unique key(M:"", L:"", S:"")inside item(i.e itemId represents item)
                cartData[itemId][size] +=1;     //if there is M only and user selected M again then no new key is created instead M is 
                                                //incremented due to line 25 code.Inversely, if user selects L then new key is created
            }else{                              // and else(line 30 code) is executed and the new key is assigned a value of 1.
                cartData[itemId][size]= 1;
            }
        }
        else{
            cartData[itemId] = {};              //on very first addition else is executed(line31 code) due to which a key is created with 
            cartData[itemId][size] = 1;        //the value as empty object for the added product as its productId/itemId 
        }                                     //then due to (line33 code) inside that empty object a new key is created with the value 1.
        setCartItems(cartData)    
        console.log(cartItems)                            //On further additions if(line 23 code) executed and checks the values
        
        
    }

    const getCartCount = ()=> {
        let totalCount = 0;
        for(const items in cartItems ){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount += cartItems[items][item];

                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;    //cartData aik object hai jisky andar products hai, usky andar jao productId/itemId key milegi
        setCartItems(cartData);               // uss key k andar jao size key milegi uski value ko = quantity kardo; aur quantity hamy
                                             //cart page par input se milti hai... uss input par ham ne yeh function call kia hai
    }

    const getCartAmount = ()=> {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item] >0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalAmount
    }


    const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate

    }

    return (
        <ShopContext.Provider value = {value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;