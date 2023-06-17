import React from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './CustomerPage.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerPage() {
    const userToken = localStorage.getItem('Token');
    const[FirstName, setFirstName] = useState({});
    const[LastName, setLastName] = useState({});
    const[State, setState] = useState({});
    const[City, setCity] = useState({});
    const[AddressArray, setAddressArray] = useState({});
    const[PostalNumber, setPostalNumber] = useState({});
    const[ContactNumber, setContactNumber] = useState({});
    const[cartItems, setcartItems] = useState([]);
    const[Products, setProducts] = useState([]);
    const[ProductIDs, setProductIDs] = useState([]);
    const[stateStatus, setStateStatus] = useState(false);
    const[PaymentMethodStatus, setPaymentMethodStatus] = useState(false);
    const[CheckboxStatus, setCheckboxStatus] = useState(false);
    const[dataStatus, setdataStatus] = useState(false);
    const[cities1, setCities1] = useState([]);
    const[cities2, setCities2] = useState([]);
    const[OrderTotal, setOrderTotal] = useState(localStorage.getItem('OrderTotal'))
    const[OrderTotalMon, setOrderTotalMon] = useState(localStorage.getItem('OrderTotalMon'))
    const[OrderTotalTue, setOrderTotalTue] = useState(localStorage.getItem('OrderTotalTue'))
    const[OrderTotalWed, setOrderTotalWed] = useState(localStorage.getItem('OrderTotalWed'))
    const[OrderTotalThu, setOrderTotalThu] = useState(localStorage.getItem('OrderTotalThu'))
    const[OrderTotalFri, setOrderTotalFri] = useState(localStorage.getItem('OrderTotalFri'))
    const[OrderTotalSat, setOrderTotalSat] = useState(localStorage.getItem('OrderTotalSat'))
    const[OrderTotalSun, setOrderTotalSun] = useState(localStorage.getItem('OrderTotalSun'))

    const[CustomerData, setCustomerData] = useState(
        {
            OrderNo: '', OrderDate: '',
            CartInfo: [],
            CartSubtotal: '',
            FirstName: [], LastName: [],
            State: [], City: [], AddressArray: [], PostalNumber: [],
            Email: '', ContactNumber: [],
            PaymentMethod: '',
            CredtitCardNum: '',
            CredtitCardNumberExp: '',
            ShippingStatus: ''
        }
    )
    const[OrderNo, setOrderNo] = useState(localStorage.getItem('OrderNo'));
    useEffect(() =>{
        localStorage.setItem('OrderNo', OrderNo.toString());
    },[OrderNo]);

    useEffect(() =>{
        localStorage.setItem('OrderTotal', OrderTotal.toString());
    },[OrderTotal]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalMon', OrderTotalMon.toString());
    },[OrderTotalMon]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalTue', OrderTotalTue.toString());
    },[OrderTotalTue]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalWed', OrderTotalWed.toString());
    },[OrderTotalWed]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalThu', OrderTotalThu.toString());
    },[OrderTotalThu]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalFri', OrderTotalFri.toString());
    },[OrderTotalFri]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalSat', OrderTotalSat.toString());
    },[OrderTotalSat]);

    useEffect(() =>{
        localStorage.setItem('OrderTotalSun', OrderTotalSun.toString());
    },[OrderTotalSun]);

    useEffect(() => {
        const cartAPI = 'http://localhost:4200/CartInfo/getProduct';
        axios.get(cartAPI, { headers: {"x-access-token" : userToken}}).then((result) => {
            setcartItems(result.data);
            setdataStatus(true)
        })
        .catch((error) => {
            console.log("Error Occurred !!!" + error);
        })
        const ProductAPI = 'http://localhost:4200/ProductInfo/getProduct';
        axios.get(ProductAPI, { headers: {"x-access-token" : userToken}}).then((result) => {
            setProducts(result.data);
        })
        .catch((error) => {
            console.log("Error Occurred !!!" + error);
        })
        const storedOrderNo = localStorage.getItem('OrderNo');
        if(storedOrderNo !== null){
          setOrderNo(parseInt(storedOrderNo));
        }
        const storedNumber = localStorage.getItem('OrderTotal');
        if(storedNumber !== null){
          setOrderTotal(parseInt(storedNumber));
        }
        const storedNumberMon = localStorage.getItem('OrderTotalMon');
        if(storedNumberMon !== null){
          setOrderTotalMon(parseInt(storedNumberMon));
        }
        const storedNumberTue = localStorage.getItem('OrderTotalTue');
        if(storedNumberTue !== null){
          setOrderTotalTue(parseInt(storedNumberTue));
        }
        const storedNumberWed = localStorage.getItem('OrderTotalWed');
        if(storedNumberWed !== null){
          setOrderTotalWed(parseInt(storedNumberWed));
        }
        const storedNumberThu = localStorage.getItem('OrderTotalThu');
        if(storedNumberThu !== null){
          setOrderTotalThu(parseInt(storedNumberThu));
        }
        const storedNumberFri = localStorage.getItem('OrderTotalFri');
        if(storedNumberFri !== null){
          setOrderTotalFri(parseInt(storedNumberFri));
        }
        const storedNumberSat = localStorage.getItem('OrderTotalSat');
        if(storedNumberSat !== null){
          setOrderTotalSat(parseInt(storedNumberSat));
        }
        const storedNumberSun = localStorage.getItem('OrderTotalSun');
        if(storedNumberSun !== null){
          setOrderTotalSun(parseInt(storedNumberSun));
        }
    }, [])

    useEffect(() => {
        cartItems.map(data => {
            setProductIDs((prevProductIDs) => 
            [...prevProductIDs, data._id]
            )
        })
    }, [dataStatus]);

    function FirstNameHandler(event){
        const { name, value } = event.target;
        setFirstName({...FirstName, [name]: value});
    }
    function LastNameHandler(event){
        const { name, value } = event.target;
        setLastName({...LastName, [name]: value});
    }
    function StateHandler(event){
        const { name, value } = event.target;
        setState({...State, [name]: value});
        
        if(value !== 'Select State'){
            setStateStatus(true)
        }else{
            setStateStatus(false)
        }

        if({...State, [name]: value}.State1 === 'Punjab'){
            setCities1(['Lahore', 'Faislabad', 'Bahawalpur', 'Gujranwala'])
        } else if({...State, [name]: value}.State1 === 'Sindh'){
            setCities1(['Karachi', 'Hyderabad', 'Larkana', 'Khairpur'])
        } else if({...State, [name]: value}.State1 === 'Khyber Pakhtunkhwa'){
            setCities1(['Peshawar', 'Mardan', 'Swabi', 'Abbottabad'])
        } else if({...State, [name]: value}.State1 === 'Balochistan'){
            setCities1(['Quetta', 'Gawadar', 'Chaman', 'Turbat'])
        }

        if({...State, [name]: value}.State2 === 'Punjab'){
            setCities2(['Lahore', 'Faislabad', 'Bahawalpur', 'Gujranwala'])
        } else if({...State, [name]: value}.State2 === 'Sindh'){
            setCities2(['Karachi', 'Hyderabad', 'Larkana', 'Khairpur'])
        } else if({...State, [name]: value}.State2 === 'Khyber Pakhtunkhwa'){
            setCities2(['Peshawar', 'Mardan', 'Swabi', 'Abbottabad'])
        } else if({...State, [name]: value}.State2 === 'Balochistan'){
            setCities2(['Quetta', 'Gawadar', 'Chaman', 'Turbat'])
        }

    }
    function CityHandler(event){
        const { name, value } = event.target;
        setCity({...City, [name]: value});
    }
    function AddressHandler(event){
        const { name, value } = event.target;
        setAddressArray({...AddressArray, [name]: value});
    }
    function PostalNumberHandler(event){
        const { name, value } = event.target;
        setPostalNumber({...PostalNumber, [name]: value});
    }
    function ContactNumberHandler(event){
        const { name, value } = event.target;
        setContactNumber({...ContactNumber, [name]: value});
    }

    function changeHandler(e){
        const newCustomerData = {...CustomerData}
        newCustomerData[e.target.name] = e.target.value;
        setCustomerData(newCustomerData);
        if(newCustomerData.PaymentMethod === 'Credit Card Online Payment'){
            setPaymentMethodStatus(true);
        }else{
            setPaymentMethodStatus(false);
        }
        console.log(newCustomerData.Email, newCustomerData.PhoneNumber)
    }

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setCheckboxStatus(isChecked);
    }

    function submitForm(){
        setOrderTotal(OrderTotal + parseInt(localStorage.getItem('CartTolal')));
        CustomerData.OrderNo = OrderNo + 1;

        const currentDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        CustomerData.OrderDate = currentDate;

        const date = new Date();
        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
        if(day === 'Monday'){
            setOrderTotalMon(OrderTotalMon +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Tuesday'){
            setOrderTotalTue(OrderTotalTue +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Wednesday'){
            setOrderTotalWed(OrderTotalWed +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Thursday'){
            setOrderTotalThu(OrderTotalThu +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Friday'){
            setOrderTotalFri(OrderTotalFri +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Saturday'){
            setOrderTotalSat(OrderTotalSat +  parseInt(localStorage.getItem('CartTolal')));
        }else if(day === 'Sunday'){
            setOrderTotalSun(OrderTotalSun +  parseInt(localStorage.getItem('CartTolal')));
        }

        CustomerData.CartInfo = cartItems;
        CustomerData.CartSubtotal = localStorage.getItem('CartTolal');
        const newFirstName = Object.values(FirstName);
        CustomerData.FirstName = [...newFirstName];
        const newLasttName = Object.values(LastName);
        CustomerData.LastName = [...newLasttName];
        const newState = Object.values(State);
        CustomerData.State = [...newState];
        const newCity = Object.values(City);
        CustomerData.City = [...newCity];
        const newAddressArray = Object.values(AddressArray);
        CustomerData.AddressArray = [...newAddressArray];
        const newPostalNumber = Object.values(PostalNumber);
        CustomerData.PostalNumber = [...newPostalNumber];
        const newContactNumber = Object.values(ContactNumber);
        CustomerData.ContactNumber = [...newContactNumber]
        CustomerData.ShippingStatus = CheckboxStatus;
            const api1 = 'http://localhost:4200/CustomerInfo/addCustomer'
            axios.post(api1, CustomerData, { headers: {"x-access-token" : userToken}}).then((results) => {
                console.log(results.data)
            })
            .catch((error) => {
                console.log(error);
            })
            ProductIDs.map(data => {
                const deleteAPI = 'http://localhost:4200/CartInfo/deleteProduct/';
                axios.delete( deleteAPI + data, { headers: {"x-access-token" : userToken}} ).then(() => {
                })
                .catch((error) => {
                    console.log("Error Occurred !!!" + error);
                })
            })
            cartItems.map(cartData => {
                Products.filter(Productdata => Productdata.ProductName === cartData.Artical).map(data => {
                    if(cartData.ProductSize === 'S'){
                        const obj = {
                            ProductStockS: data.ProductStockS - cartData.ProductQuantity 
                        }
                        const updateAPI = 'http://localhost:4200/ProductInfo/updateProduct/'; 
                        axios.put(updateAPI + data._id, obj, { headers: {"x-access-token" : userToken}}).then(() => {
                        })
                        .catch((error) => {
                        console.log(error);
                        }) 
                    }
                    if(cartData.ProductSize === 'M'){
                        const obj = {
                            ProductStockM: data.ProductStockM - cartData.ProductQuantity 
                        }
                        const updateAPI = 'http://localhost:4200/ProductInfo/updateProduct/'; 
                        axios.put(updateAPI + data._id, obj, { headers: {"x-access-token" : userToken}}).then(() => {
                        })
                        .catch((error) => {
                        console.log(error);
                        }) 
                    }
                    if(cartData.ProductSize === 'L'){
                        const obj = {
                            ProductStockL: data.ProductStockL - cartData.ProductQuantity 
                        }
                        const updateAPI = 'http://localhost:4200/ProductInfo/updateProduct/'; 
                        axios.put(updateAPI + data._id, obj, { headers: {"x-access-token" : userToken}}).then(() => {
                        })
                        .catch((error) => {
                        console.log(error);
                        }) 
                    }
                    if(cartData.ProductSize === 'XL'){
                        const obj = {
                            ProductStockXL: data.ProductStockXL - cartData.ProductQuantity 
                        }
                        const updateAPI = 'http://localhost:4200/ProductInfo/updateProduct/'; 
                        axios.put(updateAPI + data._id, obj, { headers: {"x-access-token" : userToken}}).then(() => {
                        })
                        .catch((error) => {
                        console.log(error);
                        }) 
                    }
                }) 
            })
            setOrderNo(OrderNo + 1);
            localStorage.setItem('CartNumber', 0);
            localStorage.setItem('CartTolal', 0);
            localStorage.setItem('ProductCategory', null);
            window.location.assign('/ConfirmationPage');
    }

  return (
    <div className='CustomerPage'>
        <Form className='form'>
        <p className='Heading1'>Your Billings</p>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>First Name</Form.Label>
                        <Form.Control
                        className='field'
                        type="text"
                        name="FirstName1"
                        value = {FirstName.FirstName1}
                        onChange = {(event) => FirstNameHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Last Name</Form.Label>
                        <Form.Control
                        className='field'
                        type="text"
                        name="LastName1"
                        value = {LastName.LastName1}
                        onChange = {(event) => LastNameHandler(event)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>State</Form.Label>
                        <Form.Select
                            className='field'
                            name="State1"
                            value={State.State1}
                            onChange={(event) => StateHandler(event)}
                        >
                            <option>Select State</option>
                            <option>Punjab</option>
                            <option>Sindh</option>
                            <option>Khyber Pakhtunkhwa</option>
                            <option>Balochistan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} 
                style= {{display: stateStatus === false &&  'none'}}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>City</Form.Label>
                        <Form.Select 
                            className='field'
                            name="City1"
                            value={City.City1}
                            onChange={(event) => CityHandler(event)}
                        >
                            <option>Select City</option>
                            {
                                cities1.map(data => (
                                    <option>{data}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className='area'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                id ='fieldArea'
                name="Address1"
                value = {AddressArray.Address1}
                onChange = {(event) => AddressHandler(event)}
                />
            </Form.Group>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Postal Number (Optional)</Form.Label>
                        <Form.Control
                        className='field'
                        type='number'
                        name="PostalNumber1"
                        value = {PostalNumber.PostalNumber1}
                        onChange = {(event) => PostalNumberHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Payment Method</Form.Label>
                        <Form.Select
                            className='field'
                            name="PaymentMethod"
                            value={CustomerData.PaymentMethod}
                            onChange={(event) => changeHandler(event)}
                        >
                            <option>Select Payment Method</option>
                            <option>Cash On Delivery</option>
                            <option>Credit Card Online Payment</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row style={{display: !PaymentMethodStatus && 'none'}}>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Credit Card Number</Form.Label>
                        <Form.Control
                        className='field'
                        type='Password'
                        name="CredtitCardNum"
                        value = {CustomerData.CredtitCardNum}
                        onChange = {(event) => changeHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Credit Card Expiry Date</Form.Label>
                        <Form.Control
                        className='field'
                        type='Date'
                        name="CredtitCardNumberExp"
                        value = {CustomerData.CredtitCardNumberExp}
                        onChange = {(event) => changeHandler(event)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Email Address</Form.Label>
                        <Form.Control
                        className='field'
                        type='email'
                        name="Email"
                        value = {CustomerData.Email}
                        onChange = {(event) => changeHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Contact Number</Form.Label>
                        <Form.Control
                        className='field'
                        type='number'
                        name="ContactNumber1"
                        value = {ContactNumber.ContactNumber1}
                        onChange = {(event) => ContactNumberHandler(event)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className='checkbox'>
            <Form.Label className='labels'>Ship to a different address?</Form.Label>
                <Form.Group>
                        <Form.Check
                            className='box' 
                            type="checkbox"
                            name="options"
                            value="Checked"
                            onChange={handleCheckboxChange}
                        />
                 </Form.Group>
            </div>
            <div style={{display: !CheckboxStatus && 'none'}}>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>First Name</Form.Label>
                        <Form.Control
                        className='field'
                        type="text"
                        name="FirstName2"
                        value = {FirstName.FirstName2}
                        onChange = {(event) => FirstNameHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Last Name</Form.Label>
                        <Form.Control
                        className='field'
                        type="text"
                        name="LastName2"
                        value = {LastName.LastName2}
                        onChange = {(event) => LastNameHandler(event)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>State</Form.Label>
                        <Form.Select
                            className='field'
                            name="State2"
                            value={State.State2}
                            onChange={(event) => StateHandler(event)}
                        >
                            <option>Select State</option>
                            <option>Punjab</option>
                            <option>Sindh</option>
                            <option>Khyber Pakhtunkhwa</option>
                            <option>Balochistan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} 
                style= {{display: stateStatus === false &&  'none'}}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>City</Form.Label>
                        <Form.Select 
                            className='field'
                            name="City2"
                            value={City.City2}
                            onChange={(event) => CityHandler(event)}
                        >
                            <option>Select City</option>
                            {
                                cities2.map(data => (
                                    <option>{data}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className='area'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                id = 'fieldArea'
                name="Address2"
                value = {AddressArray.Address2}
                onChange = {(event) => AddressHandler(event)}
                />
            </Form.Group>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Postal Number (Optional)</Form.Label>
                        <Form.Control
                        className='field'
                        type='number'
                        name="PostalNumber2"
                        value = {PostalNumber.PostalNumber2}
                        onChange = {(event) => PostalNumberHandler(event)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Form.Group className='formgroup'>
                        <Form.Label className='labels'>Contact Number</Form.Label>
                        <Form.Control
                        className='field'
                        type='number'
                        name="ContactNumber2"
                        value = {ContactNumber.ContactNumber2}
                        onChange = {(event) => ContactNumberHandler(event)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            </div>
        </Form>
        <div className='cartInvoice'>
            <p className='Heading2'>Your Order</p>
            <table className='Carttable'>
                <thead>
                    <tr className='TableHeaders'>
                        <th>Product</th>
                        <th>Subtotal</th>            
                    </tr>
                </thead>
                <tbody>
                    {
                         cartItems.map(ProductData => (
                            <tr>
                                <td>
                                    <div>
                                        <p>{ProductData.Artical}  x  {ProductData.ProductQuantity}</p>
                                        <p>Size: {ProductData.ProductSize}</p>
                                    </div>
                                </td>
                                <td>Rs, {ProductData.ProductPrice}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td>Subtotal</td>
                        <td>Rs, {localStorage.getItem('CartTolal')}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Flat Rate</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td className='CusPrice'>Rs, {localStorage.getItem('CartTolal')}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => submitForm()} className='placeOrder'>Place Order</button>
        </div>
    </div>
  )
}
export default CustomerPage
