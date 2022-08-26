
import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import RecipeTile from './RecipeTile'; 
import Navbar from './Navbar';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import image from './header.jpg';



function App(){

 const [query,setQuery]=useState("");
 const [recipes,setRecipes]=useState([]);

 const APP_ID="08851a99";
 const APP_KEY="b806baa8f1462192ee3e84487bcaca0e";

 const URL=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=18`;
 
 

 async function getRecipes(){
  var result =await Axios.get(URL);
  setRecipes(result.data.hits);
  console.log(result.data);
  
  
 }


 const onSubmit=(e)=>{
  e.preventDefault();
  getRecipes();

 };

  return (
    <React.Fragment>
    <Navbar/>
   
    <div className="App">
      
    
      
      {/* <h1 onClick={getRecipes}>Food Recipes</h1> */}
      <h2 className='h2-size'>Find the foods with your favorite ingredients </h2>
      {/* <img className='logo' src={image} alt="picture" /> */}
      {/*  */}

      <form className="search-form" onSubmit={onSubmit} >
        < input
          type="text" 
          className="search-bar "
          placeholder="your favorite ingredients " 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}>

          </input>
          {/* <p>you are looking for {query}</p> */}

        <input type="submit" className="search-button" value="search" ></input>
        
      </form>



      <div className="app-recipes">
        
        {recipes.map(recipe => {
         return <RecipeTile recipe={recipe}/>;
          })}

      </div>
      

      {/* <div style={{color:"purple" ,margin:"auto", alignItems:"end"}}>
        <p > created by Shiva Sheikholeslami 2022 </p>
      </div> */}
      <br></br>
      <br></br>
      <Footer/>
      
      
    </div>
    
    </React.Fragment>
    
  );
}

export default App;



