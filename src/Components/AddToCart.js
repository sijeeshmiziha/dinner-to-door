import React from 'react'
import './addtocart.css'
function AddToCart({oder}) {

    let display=oder.map((itm)=>{
        return(
            
            <div className="add-cart-container">
                <img src={itm.oder.strMealThumb} alt="" />
                <h2>{itm.oder.strMeal}</h2>
            
        </div>
        )
            })
     console.log("oder is ",oder);

    return (
    
    <div className="add-cart"><h4>Cart</h4>{display}</div>
    
       
    )
}

export default AddToCart
