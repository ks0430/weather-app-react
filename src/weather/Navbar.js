import React from 'react';

const Navbar = ({tempSwitch, changeCity, curCity, searchCity}) => {
  return (
    <nav>
      <div style={{flex:"1"}}>
          <input className="search-input" value={curCity} onChange={changeCity} />
          <button className="search-btn" onClick={searchCity}><i className="fa fa-search" ></i></button>
          <button className="temp-switch" onClick={tempSwitch}>
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
