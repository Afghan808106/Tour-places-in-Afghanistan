import React from "react";

function About(){
    return<section className="section" id="about">
    <div className="section-title">
      <h2>about <span>us</span></h2>
    </div>

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src="./images/1 (27).jpg"
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>
        <p>
          We provide the photoes of the places that too facmouse in the Afghanistan and most the holidayies are getttin cellaberating over there
        </p>
        <p>
          These places are unforgetable for watching and the foods and thing that it have is most famuose in the Afghan tradation
        </p>
        <a href=".about-info" className="btn">read more</a>
      </article>
    </div>
  </section>
}
export default About;