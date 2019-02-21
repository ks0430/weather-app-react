import React, { Component } from 'react';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 300,
    backgroundColor: "#1e202b",
    border: "none"
    
  }),
  container: (provided, state) => ({
    ...provided,
    width: 300,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,

  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    color: "transparent"
  }),
  input: (provided, state) => ({
    ...provided,
    color: "white"
  })

}


export default class Navbar extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
 
  render() {
    const{ tempSwitch, changeCity, curCity, searchCity, selectedOption } = this.props;
    return (
      <nav>
        <div style={{flex:"1", display:"flex"}}>
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
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              styles={customStyles}
            />
        </div>
      </nav>
    )
  }
}



