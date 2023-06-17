import React from 'react'
import "./CartPage.scss";
import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


function CartPage() {

    const token = localStorage.getItem('Token');
    const[cartItems, setcartItems] = useState([]);
    const[cartCounter, setCartCounter] = useState(localStorage.getItem('CartNumber'));
    const[CartTolal, setCartTotal] = useState(localStorage.getItem('CartTolal'));

    useEffect(() => {
        const cartAPI = 'http://localhost:4200/CartInfo/getProduct';
        axios.get(cartAPI, { headers: {"x-access-token" : token}}).then((result) => {
            setcartItems(result.data);
            setCartTotal(result.data.reduce((lastProductPrice, ObjectofcurrentProductPrice) =>
            lastProductPrice + ObjectofcurrentProductPrice.ProductPrice, 0
          ))
        })
        .catch((error) => {
            console.log("Error Occurred !!!" + error);
        })
        const storedCartNumber = localStorage.getItem('CartNumber');
        if(storedCartNumber !== null){
            setCartCounter(parseInt(storedCartNumber));
        }
    },[])

    useEffect(() =>{
        localStorage.setItem('CartNumber', cartCounter.toString());
    },[cartCounter]);
    
    function decrement(Name, id){
        cartItems.map(data => {
            if(data._id === id && data.Artical === Name && 1 < data.ProductQuantity){
                const ProductID = data._id
                const updatedQuantity = data.ProductQuantity - 1;
                setCartCounter(cartCounter - 1);
                const UpdatedjsonObject = {
                    ProductPrice: data.ProductPrice/data.ProductQuantity * updatedQuantity,
                    ProductQuantity: updatedQuantity,
                }
                const updateAPI = 'http://localhost:4200/CartInfo/updateProduct/'; 
                axios.put(updateAPI + ProductID, UpdatedjsonObject, { headers: {"x-access-token" : token}}).then(() => {
                    window.location.assign('/CartPage')
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        })
    }

    function increment(Name, id){
        cartItems.map(data => {
            if(data._id === id && data.Artical === Name && data.ProductStock > data.ProductQuantity){
                const ProductID = data._id
                const updatedQuantity = data.ProductQuantity + 1;
                setCartCounter(cartCounter + 1);
                const UpdatedjsonObject = {
                    ProductPrice: data.ProductPrice/data.ProductQuantity * updatedQuantity,
                    ProductQuantity: updatedQuantity,
                }
                const updateAPI = 'http://localhost:4200/CartInfo/updateProduct/'; 
                axios.put(updateAPI + ProductID, UpdatedjsonObject, { headers: {"x-access-token" : token}}).then(() => {
                    window.location.assign('/CartPage')
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        })
    }

    function deleteCartItem(id, quantity){
        const deleteAPI = 'http://localhost:4200/CartInfo/deleteProduct/';
        axios.delete( deleteAPI + id, { headers: {"x-access-token" : token}} ).then(() => {
            window.location.assign('/CartPage')
        })
        .catch((error) => {
            console.log("Error Occurred !!!" + error);
        })
        if(cartCounter > 0){
            setCartCounter(cartCounter - quantity);
        }  
    }
    
    function checkOut(){
        window.location.assign('/CustomerPage')
    }

  return ( 
    <div className='cartPage'>
        <div className='CartPageDetails'>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='Product'>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(ProductData => (
                            <tr>
                                <td className='artical_Details'>
                                    <CloseIcon className='deleteBTN' onClick = {() => deleteCartItem(ProductData._id, ProductData.ProductQuantity)}/>
                                    <img className='cartImage' src = {ProductData.ProductImageURL} />
                                    <div className='NS-DIV'>
                                        <p>{ProductData.Artical}</p>
                                        <p>Size: {ProductData.ProductSize}</p>
                                    </div>
                                </td>
                                <td>Rs, {ProductData.ProductPrice/ProductData.ProductQuantity}</td>
                                <td className='ProductQuan'>
                                    <p className='Dec_BTN' onClick={() => decrement(ProductData.Artical, ProductData._id)}>⎯</p>
                                    <p>{ProductData.ProductQuantity}</p>
                                    <p className='Inc_BTN' onClick={() => increment(ProductData.Artical, ProductData._id)}>+</p>
                                </td>
                                <td className='total'>Rs, {ProductData.ProductPrice}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='Mobile-Cart'>
                {
                    cartItems.map(ProductData => (
                        <div className='Mobile-Data-Div'>
                            <img className='cartImageM' src = {ProductData.ProductImageURL} />
                            <div className='NS-DIVM'>
                                <p>{ProductData.Artical}</p>
                                <p>Quantity:</p>
                                <p>Subtotal: <b>Rs, {ProductData.ProductPrice}</b></p>
                                <p>Size: {ProductData.ProductSize}</p>
                            </div>
                            <div className='ProductQuanM'>
                                <p className='Dec_BTNM' onClick={() => decrement(ProductData.Artical, ProductData._id)}>⎯</p>
                                <p>{ProductData.ProductQuantity}</p>
                                <p className='Inc_BTNM' onClick={() => increment(ProductData.Artical, ProductData._id)}>+</p>
                            </div>
                            <CloseIcon className='deleteBTNM' onClick = {() => deleteCartItem(ProductData._id, ProductData.ProductQuantity)}/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='cartInvoice'>
            <p className='cart'>Cart Total</p>
            <div className='Sub-Total'>
                <p className='heading'>Subtotal</p>
                <p className='value'>Rs, {CartTolal}</p>
            </div>
            <div className='Shipping'>
                <p className='heading'>Shipping</p>
                <div className='values'>
                    <p>Flat Rate</p>
                    <p className='country'>Shipping to Pakistan</p>
                </div>
            </div>
            <div className='Total'>
                <p className='heading'>Total</p>
                <p className='value'>Rs, {CartTolal}</p>
            </div>
            <button onClick = {() => checkOut()} className='checkOut'>PROCEED TO CHECK OUT</button>
        </div>
    </div>
  )
}

export default CartPage
