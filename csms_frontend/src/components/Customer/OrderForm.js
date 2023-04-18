import React from 'react';
import {useEffect,useState,useReducer} from 'react';
import "../../styles/Registration.css";
import Payment from '../Payment.js';
import "../../styles/Payment.css";
const init = {
    
   pickupaddress:null,
   receivername:null,
   deliveryaddress:null
   
}
const reducer = (state,action) => {
   switch(action.type){
       case 'update':
           return { ...state, [action.field]: action.val}; 
       case 'clear':return init   
   }
}

export default function OrderForm() {
   const [orderdetails,dispatch] = useReducer(reducer,init);
   const [company,setCompany] = useState([]);  
   const [category,setCategory] = useState([]);
   const [price,setPrice] = useState([]);
   const [totalprice,setTotalPrice] = useState(0);   
   const [valueCompany, setValueCompany] = useState([]);
   const [valueCategory, setValueCategory] = useState([]);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const [modalOpen, setModalOpen] = useState(false);
   const [categoryPricingId,setCategoryPricingId] = useState([]);
   const [state,setState] = useState(false);

let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)
console.log(valueCompany);

const handleCompanyChange =  (e) => {
   setValueCompany(e.target.value);
 };
 const handleCategoryChange =  (e)=>{
   setValueCategory(e.target.value);
};
 
const getCategoryPrice = (com) =>{

   console.log(" value of com "+com)
   fetch("http://localhost:8080/"+com+"/getprice")
   .then(resp=>resp.json())
   .then(data=>setPrice(data))
   
   
}

const totalPrice = (price)=>{  
   console.log("value of price "+price) 
   price.map((v)=>{
    if(v.category.categoryId==valueCategory && v.companyId==valueCompany)
    {
       setTotalPrice(v.categoryPrice);
       setCategoryPricingId(v.categoryPricingId);
    }
    else{
      console.log("unable to set total price");
    }
   })
}
const getCategory = () =>{
    fetch("http://localhost:8080/getcategory")
    .then(resp=>resp.json())
    .then(data=>setCategory(data))   

}
const getCompany = () =>{
   fetch("http://localhost:8080/approvedcompany")
   .then(resp=>resp.json())
   .then(data=>setCompany(data))
}
useEffect(() => {        
   getCompany();
   getCategory();
   getCategoryPrice(valueCompany);
   totalPrice(price);
  },[formErrors,valueCompany,valueCategory])

const handleSubmit = (e) => {
   e.preventDefault();
   setFormErrors(validate(orderdetails));
   setIsSubmit(true);
   
   if (Object.keys(formErrors).length === 0 && isSubmit) {
      //console.log(com);
      sendData(e);
    }
 };
 const validate = (values) => {
   const errors = {};
   if (!values.pickupaddress) {
     errors.pickupaddress = "Pick-up address is required!";
   }        
   if (!values.receivername) {
     errors.receivername = "Receiver Name is required";
   } 
   if (!values.deliveryaddress) {
       errors.deliveryaddress = "Delivery Address is required";
   }
   return errors;
 };

 const sendData = (e) => {    
   //e.preventDefault();
   let customerId= (JSON.parse(localStorage.getItem("customer")).customerId)
   const requestTime = new Date();
   
        const reqData = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({

            companyId:valueCompany,
            categoryId:valueCategory,
            customerId:customerId,
            pickupAddress:orderdetails.pickupaddress,
            receiverName:orderdetails.receivername,
            deliveryAddress:orderdetails.deliveryaddress,
            categoryPricingId:categoryPricingId,
            requestTime:requestTime,
            paymentStatus:true
            })    
        }

       console.log(reqData); 
    fetch("http://localhost:8080/orderrequest",reqData)
    .then(resp => {if(resp.status===200)
      {            
        alert("order send successfully!!!")
      }
      else{
         alert("Failed to send Order!!!")
      }})

}
     
    const  togglePop = () => {
     setState(!state);
      };
         

   return (
    <div className="register">
    <div><h1>Courier Details Form</h1></div>
    <form className="formreg">
        <div className="form-outline mb-4">
            <lable>Customer Name:</lable>
            <input type="text" id="customername" className="form-control" value={customerName} readOnly={true}/>     
         </div>

         <div className="form-outline mb-4">
            <lable>Select Company:</lable>
            <select id="companyname" name="companyname" className="form-control" value={valueCompany} onChange={handleCompanyChange}>
               <option value="">Company Names :</option>
               {company.map((company) => (
               <option key={company.companyId} value={company.companyId}>{company.companyName}</option>
               ))}
            </select>
            
         </div>

         <div className="form-outline mb-4">
            <lable>Select Category:</lable>
            <select id="companyname" name="categoryname" className="form-control" value={valueCategory} onChange={handleCategoryChange}>
            <option value="">Category Names :</option>
               {category.map((category) => (
               <option value={category.categoryId}>{category.categoryName}</option>
               ))}
            </select>
             
         </div>

         <div className="form-outline mb-4">
            <lable>Pickup Address:</lable>
            <input type="textarea" id="pickupaddress" name="pickupaddress" className="form-control"
            value={orderdetails.pickupaddress}
            onChange={ (e)=>{dispatch({type: 'update', field: 'pickupaddress', val: e.target.value })} }
            /> 
         <p className="text-danger">{formErrors.pickupaddress}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Receiver Name:</lable>
            <input type="text" id="receivername" name="receivername" className="form-control"
            value={orderdetails.receivername}
            onChange={ (e)=>{dispatch({type: 'update', field: 'receivername', val: e.target.value })} }
            /> 
         <p className="text-danger">{formErrors.receivername}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Delivery Address:</lable>
            <input type="textarea" id="deliveryaddress" name="deliveryaddress" className="form-control"
            value={orderdetails.deliveryaddress}
            onChange={ (e)=>{dispatch({type: 'update', field: 'deliveryaddress', val: e.target.value })} }
            />
         <p className="text-danger">{formErrors.deliveryaddress}</p>     
         </div>

         <div className="form-outline mb-4">
            <lable>Total Price:</lable>
            <input type="text" id="price" name="price" className="form-control" value={totalprice} readOnly={true}/><br/>
            
           {/* <button  className="btn btn-primary btn-block mb-4" value="Make Payment"
            onChange={(e)=>{dispatch({type: 'update', field: 'paymentstatus', val: true })}}/>
            { orderdetails.paymentstatus ? <p>Payment is Successfull !!</p>: ""}
             <button className="btn btn-primary btn-block mb-4 openModalBtn" onClick={() => { setModalOpen(true);
        }}>Make Payment</button>
        {modalOpen && <Payment closeModel={setModalOpen} />}
            <div>
         <div className="btn" onClick={()=>{togglePop()}}>
            <button>New User?</button>
         </div>
         {state ? <Payment toggle={()=>{togglePop()}} /> : null}
         </div> */}   
               </div>     
         <hr></hr>
         
         <div className="form-outline mb-4">
            <button type="submit"  id="submit" className="btn btn-primary btn-block mb-4"
            onClick = { (e)=>{ handleSubmit(e) } }
            >Submit</button>
         </div>   

      </form>
    </div>
    
  )
}




   /*const stateRef = useRef();
   stateRef.current = valueCompany;
   let customerName= (JSON.parse(localStorage.getItem("customer")).customerName)

   const handleCompanyChange = async (e) => {
      console.log("setting company value")
      console.log(e.target.value);
      setValueCompany(e.target.value);
       
      //console.log(valueCompany+" in handlecompanychnage")
      console.log("company value set calling populate category");
      // getCategoryPrice(e.target.value);
      await populatCategoryPrice(e.target.value);
    };

   const handleCategoryChange =  (e)=>{
      setValueCategory(e.target.value);
       // getCategoryPrice();
       onCategoryChange(e.target.value);
    }
   const getCategoryPrice =  (e) =>{
      //let com= (JSON.parse(localStorage.getItem("company")).companyId)
      let com =e;
      console.log(com);
      if(valueCompany!=null && valueCategory!=null){
      fetch("http://localhost:8080/"+com+"/getprice")
      .then(resp=>resp.json())
      .then(data=>setPrice(data))
      .then(totalPrice());
      }
      else
      {
         console.log("unable to fetch")
      }

  }
  const populatCategoryPrice = async(e)=>
  {console.log("populating category pricing "+ e)
   if(e!=0){
      let resp = await fetch("http://localhost:8080/"+e+"/getprice")
      setPrice(await resp.json());
      console.log(price);
   }
   else
   {
      console.log("skipped call, company not selected");
   }
  }
  const onCategoryChange = (e) =>
  {
      if(valueCompany==0)
      {
         alert("Please select Company");
      }
      else
      {
         totalPrice(e);
      }

  }
  const totalPrice = (e)=>{
   
     price.map((v)=>{
      if(v.category.categoryId==e && v.companyId==stateRef.current)
      {
         setTotalPrice(v.categoryPrice);
      }
     })
   console.log(totalprice+"in total price");
  }
   const getCategory = () =>{
     // let com= (JSON.parse(localStorage.getItem("company")).companyId)
     // let com = company.companyId;
      fetch("http://localhost:8080/getcategory")
      .then(resp=>resp.json())
      .then(data=>setCategory(data))    
      //console.log(category);
  }
   const getCompany = () =>{
      fetch("http://localhost:8080/getallcompany")
      .then(resp=>resp.json())
      .then(data=>setCompany(data))
  }
  useEffect(() => {        
   getCompany();
   getCategory();
   //getCategoryPrice();
   //totalPrice();
   //populatCategoryPrice();
   //onCategoryChange();
   //console.log(valueCompany+"in useeffect");
  },[])
*/