import React from "react";


const Photo = props => (
  <div>
     <h3>{props.Photo.title}</h3>
    <img src={props.Photo.url} alt={props.Photo.title} />
    <p>{props.Photo.explanation}</p>
    
  </div>
);



export default Photo;