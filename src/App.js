import React from 'react';
import './App.css';
import axios from "axios";

function App() {

  //Location
  const [Location, setLocation] = React.useState({
    coords: {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      altitudeAccuracy: 0,
      speed: 0,
      heading: 0
    }, 
    timestamp: 0
  })

  const [Count, setCount] = React.useState(0)

  let a = 0;

  setInterval(() => {
    a++
    setCount(a)
  }, 60000);

  const [Data, setData] = React.useState("")
  
  //Weather app
  const id = "63051a790a5aec120dd7549267d93213"
  let API = `https://api.openweathermap.org/data/2.5/weather?lat=33.548193678779775&lon=73.1862553826574&appid=63051a790a5aec120dd7549267d93213`
  
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      // console.log(pos)
      setLocation(pos)
    })
    axios.get(API)
    .then((res) => {
      console.log(res.data.weather[0].description)
      setData(res.data.weather[0].description)
    }).catch((err) => {
      console.log("Error: " + err)
    })
  }, [Count])

  return (
    <>
    <h1>Location</h1>
    Longitude: { Location.coords.longitude }
    <br />
    Latitude: { Location.coords.latitude }
    <br />
    Speed: { Location.coords.speed }
    <br />
    Accuracy: { Location.coords.accuracy }
    <br />
    Altitude accuracy: { Location.coords.altitudeAccuracy }
    <br />
    Heading: { Location.coords.heading }
    <br />
    Time: { Location.timestamp }

    <div className="weather">
      <h1>Weather Data</h1>
      <strong>Detail of Live Location</strong>
      <p>{ Data }</p>
    </div>

    </>
  );
}

export default App;
