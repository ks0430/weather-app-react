import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { fetchCityList } from '../api/weather';
import { toast } from 'react-toastify';

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
 
  loadOptions =  (inputValue, callBack) => {
    const timeout = setTimeout(() => {
      console.log("load change:", inputValue);
      // get citylist from remote 
      fetchCityList(inputValue)
        .then(response => {
          callBack(this.filterCity(inputValue, response));
        })
        .catch(err => {
          // If city code is not found, then return 
          callBack([]);
        });
    }, 500);

    // Delete previous typing sending
    if(TimeManager.length>0) {
      while(TimeManager.length>0) {
        let timeout = TimeManager.pop();
        clearTimeout(timeout);
      }
      console.log("clear time out!");
    }
    // Add current time event
    TimeManager.push(timeout);
  }

  filterCity = (inputValue, cityList) => (
    cityList.map(item => ({
      value: item.id,
      label: `${item.name}, ${item.country}`
    }))
  )

  render() {
    const{ tempSwitch, selectCity, unit } = this.props;
    return (
      <nav>
        <div style={{flex:"1", display:"flex"}}>
             <AsyncSelect 
              cacheOptions
              loadOptions={this.loadOptions}
              styles={customStyles}
              onChange={selectCity}
              noOptionsMessage = {()=>"City not found"}
            />
            <button className="temp-switch" onClick={tempSwitch}>
            <i
                className="fa fa-thermometer-empty"
                aria-hidden="true"
                style={{"paddingRight":"5px"}}
            ></i>
            <sup>&deg;</sup>{unit}
            </button>
        </div>
      </nav>
    )
  }
}



