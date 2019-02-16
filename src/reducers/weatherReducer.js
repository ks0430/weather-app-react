const initialState = {
  condition: {
    city: 'Brisbane, Au',
    humidity: 62,
    windSpeed: 230,
    windDirection: 'east',
    temp: {
      C: 26, 
      F:70
    }
  },
  forecast: [
    {
      day: 'Fri',
      time: '10:00',
      high: {C: '37',F: '20'},
      low: {C: '30', F: '16'}
    },
    {
      day: 'Fir',
      time: '13:00',
      high: {C: '27',F: '10'},
      low: {C: '30', F: '16'}
    },
    {
      day: 'Mon',
      time: '13:00',
      high: {C: '21',F: '10'},
      low: {C: '18', F: '8'}
    }
  ]
}

const weatherReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default weatherReducer;