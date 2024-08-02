import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//Importing images from the assests 
import icecream1 from "./assets/images/icecrm1.jpg"
import icecream2 from "./assets/images/icecrm2.jpg"
import icecream3 from "./assets/images/icecrm3.jpg"
import icecream4 from "./assets/images/icecrm4.jpg"
import icecream5 from "./assets/images/icecrm5.jpg"
import icecream6 from "./assets/images/icecrm6.jpg"
import icecream7 from "./assets/images/icecrm7.jpg"
import icecream8 from "./assets/images/icecrm8.jpg"






const root = ReactDOM.createRoot(document.getElementById('root'));





function Gallery(){

  return(
    <div className='container'>
      <div className='imageBox'>
        <img src={icecream1} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream2} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream3} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream4} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream5} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream6} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream7} alt="" />
      </div>
      <div className='imageBox'>
        <img src={icecream8} alt="" />
      </div>
   </div>
  )
 
}









root.render(
  <div>
    <Gallery></Gallery>
  </div>
);


