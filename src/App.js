import './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DetailsCities from './components/DetailsCities'
import { getFormattedWeatherData } from './components/weatherService';
import React, { useEffect,useState } from 'react';
import './App.css'
function App(){
  const[city,setCity]=useState('La Maddalena')
    const[weather,setWeathear]=useState(null);
    const[units,setUnits]=useState('metric')
useEffect(()=>{
  const fetchWethearData=async()=>{
const data= await getFormattedWeatherData(city,units)
setWeathear(data)
console.log(data);
};
fetchWethearData();
},[units,city]);
const handleUnitsClick=(e)=>{
  const button=e.currentTarget;
  const currentUnit=button.innerText
  console.log(button.innerText)
}
const enterKeyPressed=(e)=>{

if (e.keyCode===13){
  setCity(e.currentTarget.value)
  e.currentTarget.blur()
}}
return(
  <div className='App'>
<Container className="d-flex mt-5">
            <Row className="justify-content-center ms-5">
                <Col xs={12} md={12} lg={12} xl={12}>
                  <h1>Epi-Weather</h1>
                </Col>
            </Row>
         <Row className='mt-5 text-center'>
    <Col xs={12} md={12} lg={12} xl={12}>
      {weather&&(
        <>
        <input onKeyDown={enterKeyPressed}type='text' placeholder='enter City...'></input>
                <div>
                    <h4 className="mt-2" id='Citta'>{`${weather.name},${weather.country}`}</h4>
                    <p className='weather'>{weather.description}</p>
                    <h2 id='h2' className="me-2 me-auto">{`${weather.temp.toFixed()}${'°C'}`}</h2>
                </div></>)}
    
    <DetailsCities weather={weather} units={units}/>
    
    </Col>
  </Row>
</Container></div>
)
}

export default App;