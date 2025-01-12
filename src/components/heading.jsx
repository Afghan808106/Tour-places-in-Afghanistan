import React from "react";

function Heading(){
   return <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/LOGO.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul class="nav-links" id="nav-links">
          <li>
            <a href="#home" className="nav-link"> home </a>
          </li>

          <li>
            <a href="#about" className="nav-link"> about </a>
          </li>

          <li>
            <a href="#services" className="nav-link"> services </a>
          </li>

          <li>
            <a href="#tours" className="nav-link"> tours</a>
          </li>
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="#" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="#" target="_blank" className="nav-icon"
              ><i className="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>

}
export default Heading;