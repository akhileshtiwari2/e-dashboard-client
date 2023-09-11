import React,{useState} from 'react';

const AddProduct = () =>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
   
    const addProduct = async()=>{
        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name,price,category,company,userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };
    return(
        <div className="product-container">
            <h1>Add Product</h1>
            <input className="input-box" type="text" placeholder="Enter product name" 
            onChange={(e)=>setName(e.target.value)} value={name} />

            <input className="input-box" type="text" placeholder="Enter product price" 
            onChange={(e)=>setPrice(e.target.value)} value={price} />

            <input className="input-box" type="text" placeholder="Enter product category"
            onChange={(e)=>setCategory(e.target.value)} value={category} />

            <input className="input-box" type="text" placeholder="Enter product company"
            onChange={(e)=>setCompany(e.target.value)} value={company} />

            <button onClick={addProduct} className="add-product-btn" type="button">Add Product</button>
        </div>
    )
}

export default AddProduct;