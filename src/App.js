import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DisplayCountry from './components/DisplayCountry/DisplayCountry';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);


  return (
    <div className="App">
      <h1 className='mb-5 mt-3'>Loaded Countries: {countries.length}</h1>
      <Container>
        <DisplayCountry countries={countries}></DisplayCountry>
      </Container>

      {/* {
        countries.map(country => <DisplayCountry country={country} key={country.alpha3Code}></DisplayCountry>)
      } */}
      
    </div>
  );
}

export default App;
