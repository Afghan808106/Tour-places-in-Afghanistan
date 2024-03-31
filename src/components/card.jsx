import React from "react";


function Card(props){

    const { id,image,tourdate,tourist,discription,days,costs,country,number}=props;

    return <article className="tour-card">
    <div className="tour-img-container">
      <img src={image} className="tour-img" alt="" />
      <p className="tour-date">{tourdate}</p>
    </div>
    <div className="tour-info">
      <h4>{tourist}</h4>
      <p>{discription}</p>
      <div className="tour-footer">
        <p>
          <span><i className="fas fa-map"></i></span> {country}
        </p>
        <p>{days}</p>
        <p>{number+1}</p>
        <p>{costs}</p>
      </div>
    </div>
  </article>
}
export default Card;