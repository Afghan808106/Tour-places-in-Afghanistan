import React from "react";
import Card from "./card";
import Tourdata from'./dataTour';

function Tour(){

    return <section className="section" id="tours">
    <div className="section-title">
      <h2>featured <span>tours</span></h2>
    </div>

    <div className="section-center featured-center">
      {
        Tourdata.map((data,index)=>{
          const { id,image,tourdate,tourist,discription,days,costs,country}=data;

        return <Card key={data.id} {...data} number={index}/>
        })
      }
    
    </div>
  </section>
     
    
}
export default Tour;