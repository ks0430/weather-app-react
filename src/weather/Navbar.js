import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { fetchCityList, fetchCurrentData, fetchForecastData } from '../api/weather';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const TimeManager = [];

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
    inputString:''
  }

  loadOptions =  (inputValue, callBack) => {

    const timeout = setTimeout(() => {
      console.log("load change:", inputValue);
      // get citylist from remote 
      fetchCityList(inputValue)
        .then(response => {
          callBack(this.filterCity(inputValue, response));
        });

      // callBack(this.filteredColors(inputValue));
    }, 500);

    // Delete previous sending
    if(TimeManager.length>0) {
      while(TimeManager.length>0) {
        let timeout = TimeManager.pop(timeout);
        clearTimeout(timeout);
      }
      console.log("clear time out!");
      // return;
    }

    TimeManager.push(timeout);
  }

  filteredColors = (inputValue) => (
    options.filter(item => item.label.toLowerCase().includes(inputValue.toLowerCase()))
  )

  filterCity = (inputValue, cityList) => (
    cityList.map(item => ({
      value: item.id,
      label: `${item.name}, ${item.country}`
    }))
  )

  inputChange = (newValue) => {
    this.setState({ inputString: newValue });
    return newValue;
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
 

  render() {
    const{ tempSwitch, changeCity, curCity, searchCity, selectedOption, selectCity  } = this.props;
    return (
      <nav>
        <div style={{flex:"1", display:"flex"}}>
             <AsyncSelect 
              cacheOptions
              loadOptions={this.loadOptions}
              styles={customStyles}
              onInputChange={this.inputChange}
              onChange={selectCity}
            />
            {/* <input className="search-input" value={curCity} onChange={changeCity} />
            <button className="search-btn" onClick={searchCity}><i className="fa fa-search" ></i></button> */}
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
}



