import './SeasonDisplay.css';
import React from 'react';
// import ReactDOM from 'react-dom';

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr it cold",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else{
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  // console.log(props);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text, iconName } = seasonConfig[season];
  // const text = season === 'Winter' ? 'Burr, its chilly' : 'Lets hit to the beach';
  // const iconName = season === 'Winter' ? 'snowflake' : 'sun';
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text} </h1>
      <br />
      <i className={`icon-right massive ${iconName} icon`} />
      <br/>
      Latitude is : {props.lat}
      <br />
      Longitude is : {props.lng}

    </div>  
  )
};

export default SeasonDisplay;