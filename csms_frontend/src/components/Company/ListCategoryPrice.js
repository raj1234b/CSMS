import React from 'react'
import {useEffect,useState} from 'react';

export default function ListCategoryPrice() {
    const [price,setPrice] = useState([]);  
    const [isTag, setTag] = useState(false);
    const [newPrice,setNewPrice] = useState(0);
    const [newValue,setNewValue] = useState([]);

    const update = (e) =>
    {
      let c = e;
        const reqData =(c) = {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({                
                category: {         
                    categoryId : (e.category.categoryId),
                    categoryName : (e.category.categoryName)
                 },   
                 categoryPrice : newPrice,              
                 companyId : c.companyId                
            })    
        }
        fetch("http://localhost:8080/updateprice/"+e.categoryPricingId, reqData)
        .then(resp => resp.json())
        .then(data => {
        getCategoryPrice()})
    }

    const getCategoryPrice = () =>{
        let com= (JSON.parse(localStorage.getItem("company")).companyId)
        fetch("http://localhost:8080/"+com+"/getprice")
        .then(resp=>resp.json())
        .then(data=>setPrice(data))    
        
    }

    useEffect(() => {
        getCategoryPrice();
       
       },[])

    return (        
        <div className="row ">
            <div className="">
                <h3>Category Price</h3>
            <div className="table-responsive">                        
            <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Category Name</th>
                    <th scope="col">Category Price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {                    
                price.map((v)=>
                {
                    return(                        
                        <tr scope="row">
                            <td >{v.category.categoryName}</td>
                            <td>{v.categoryPrice}</td>
                            <td><button className='btn btn-success' onClick={()=>{setTag(true); setNewValue(v)}}>Update</button></td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
            {isTag ? (<div><input type="number" className="form-control" onChange={ (e)=>{setNewPrice(e.target.value)}} value={newPrice}/>
            <button className='btn btn-success' onClick={()=>{setTag(false); update(newValue)}}>Submit</button></div>)
            : ""}
            </div>            
        </div>
  )
}
