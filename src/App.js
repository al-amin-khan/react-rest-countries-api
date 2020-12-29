import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayCountry from './components/DisplayCountry/DisplayCountry';
import AddCountries from './components/DisplayCountry/AddCountries/AddCountries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);


  const [addCountries, setAddCountries] = useState([]);
  const handleAddCountry = (country) => {
    const newAddCountries = [...addCountries, country]
    setAddCountries(newAddCountries)
  };


  return (
    <div className="App">
      <h1 className='mt-3'>Loaded Countries: {countries.length}</h1>
      <h2>Added Countries: {addCountries.length}</h2>
      <AddCountries addCountries={addCountries}></AddCountries>
      <Container>
        <DisplayCountry countries={countries} handleAddCountry={handleAddCountry}></DisplayCountry>
      </Container>

      {/* {
        countries.map(country => <DisplayCountry country={country} key={country.alpha3Code}></DisplayCountry>)
      } */}
      
    </div>
  );
}

export default App;
