import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./WishListPage.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function WishListPage() {

    const navigate = useNavigate()
    const token = localStorage.getItem('Token');

    const[Product, setProduct] = useState([]);
    const[imageSource, setImageSource] = useState();
    const[hoverStatus, setHoverStatus] = useState();

    useEffect(() => {
        const api1 = 'http://localhost:4200/WishListInfo/getProduct';
        axios.get(api1, { headers: {"x-access-token" : token}}).then((result) => {
            setProduct(result.data)
        })
        .catch((error) => {
            console.log("Error Occurred !!!" + error);
        })
    }, [])

    function handleHoverOver(id){
        Product.map(data => {
          if(data._id === id){
            setHoverStatus(id)
            setImageSource(data.ProductImageUrlArray[1]);
          }
        })
      }
      
    function handleHoverOut(id){
        Product.map(data => {
          if(data._id === id){
            setHoverStatus(id)
            setImageSource(data.ProductImageUrlArray[0]);
          }
        })
    }

    function Clicked(id){
        navigate('/DescriptionPage', {
          state: {
            ProductID: id
          }
        })
    }

  return (
    <Container className='wishListProducts'>   
        <h3>WishList</h3>
        <Row>
            {
            Product.map(Info => (
            <Col onMouseOver={() => handleHoverOver(Info._id)} onMouseOut={() =>  handleHoverOut(Info._id)}
            onClick={() => Clicked(Info._id)} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <img className="Artical" src = {hoverStatus===Info._id && Info.ProductImageUrlArray[1] != ''? 
                imageSource : Info.ProductImageUrlArray[0]} alt="InsertImage"  /> 
                <p className="Name">{Info.ProductName}</p>
                <p className="Prc">Rs, {Info.ProductPrice}</p>
            </Col>
            ))
            }  
        </Row>
    </Container>
  )
}

export default WishListPage