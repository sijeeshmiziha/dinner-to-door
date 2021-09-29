import React from 'react'
import './Popup.css'
function Popup({setPopUp,item,oderItems}) {
    
    function closePopup() {
        setPopUp(false);
      }
     
    return (
        <div className="popup" >
            <div className="popup-content">
          <div className="popup-content-data">
                 <div className="popup-header">
                     <img src={item.strMealThumb} alt="" />
                     <h5 className="popup-header-category" >{item.strCategory}</h5>
                 </div>
                 <h2 >{item.strMeal}</h2>
                 <p>{item.strInstructions}</p>
             </div>
              <button onClick={()=>oderItems(item)}>Oder Now</button>
                <h5 className="popup-close" onClick={closePopup}>Close</h5>
            </div>
        </div>
    )
}

export default Popup
