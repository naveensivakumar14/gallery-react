import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//HTML Root
const root = ReactDOM.createRoot(document.getElementById('root'));


//Data
const images=[
  {imgUrl: "https://images.unsplash.com/photo-1514953808247-5d4b1cc19835?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {imgUrl: "https://plus.unsplash.com/premium_photo-1713840322128-fb325929ba05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://images.unsplash.com/photo-1633881613747-e98695066141?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGljZWNyZWFtc3xlbnwwfDB8MHx8fDA%3D"},
  {imgUrl: "https://images.unsplash.com/photo-1591677445539-840cc64705f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGljZWNyZWFtc3xlbnwwfDB8MHx8fDA%3D"},
  {imgUrl: "https://images.unsplash.com/photo-1702827402831-c74c03e87c7c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGljZWNyZWFtc3xlbnwwfDB8MHx8fDA%3D"},
  {imgUrl: "https://images.unsplash.com/photo-1625060571495-5d63f813e504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://images.unsplash.com/photo-1696463257101-9d7ddc152120?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://plus.unsplash.com/premium_photo-1671559020858-e1740fe4ff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://plus.unsplash.com/premium_photo-1713443950358-a1e703396a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://plus.unsplash.com/premium_photo-1713987665771-0707f06c0169?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxpY2VjcmVhbXN8ZW58MHwwfDB8fHww"},
  {imgUrl: "https://images.unsplash.com/photo-1534095256953-6249f0cd07f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlY3JlYW1zfGVufDB8MHwwfHx8MA%3D%3D"},
  {imgUrl: "https://images.unsplash.com/photo-1684135347630-82c37ed5c7b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGljZWNyZWFtc3xlbnwwfDB8MHx8fDA%3D"}
]


//Apperance
function Gallery(props){
  return(
    <div className='box'> 
      <img src={props.image} alt="icecreams" />
    </div>
  )
}

///Logic
root.render(
    <div className='container'>
    {
      images.map(function(item){
        return (
        <Gallery image={item.imgUrl}></Gallery>
      )
      })
    }
    </div>
);


