import React from 'react';
import './RecipeTile.css';

 export default function RecipeTile({recipe}) {
  return (
   
      <div className='recipeTile' onClick={()=>{window.open(recipe["recipe"]["url"])}}>
          <p> Name :  {recipe["recipe"]["label"]}</p>
          <p> Dish Type : {recipe["recipe"]["dishType"]}</p>
          <p>calories :{recipe["recipe"]["calories"]} </p>
          <img className='recipeTile-image' src={recipe["recipe"]
          ["image"]}></img>
          
         
     </div>
    
    
  );
          
  
        
}

// recipe["recipe"]["image"].match(/\.(jpg|jpeg|png|gif)$/)!=null &&