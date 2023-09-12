import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () =>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();
   
    useEffect(() => {
      console.log(params)
      getProductDetails();

    },[])
    const getProductDetails = async()=>{
        console.log(params)
        let result =await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async()=>{
        console.log(name,price,category,company)
   
  };
    return(
        <div className="product-container">
            <h1>Update Product</h1>
            <input className="input-box" type="text" placeholder="Enter product name" 
            onChange={(e)=>setName(e.target.value)} value={name} />
            

            <input className="input-box" type="text" placeholder="Enter product price" 
            onChange={(e)=>setPrice(e.target.value)} value={price} />
           

            <input className="input-box" type="text" placeholder="Enter product category"
            onChange={(e)=>setCategory(e.target.value)} value={category} />
        

            <input className="input-box" type="text" placeholder="Enter product company"
            onChange={(e)=>setCompany(e.target.value)} value={company} />
       

            <button onClick={updateProduct} className="add-product-btn" type="button">Update Product</button>
        </div>
    )
}

export default UpdateProduct;