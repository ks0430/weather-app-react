import React from 'react';

const Navbar = (props) => {
  return (
    <nav>
      <div style={{flex:"1"}}>
          <input className="search-input" />
          <button className="search-btn"><i className="fa fa-search"></i></button>
          <button className="temp-switch" onClick={props.tempSwitch}>
          <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{"paddingRight":"5px"}}
          ></i>
          <sup>&deg;</sup>C
          </button>
      </div>
    </nav>
  )
}

export default Navbar;
