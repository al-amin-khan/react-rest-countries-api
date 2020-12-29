import React from 'react';
import { Card, Col, Row, Button} from 'react-bootstrap';


const DisplayCountry = (props) => {
    // console.log(props);
    const countries = props.countries;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            <Row>
                {
                    countries.map(country =>
                        <Col md={4} key={country.alpha3Code}>
                            <Card border='dark' className='mb-3'>
                                <Card.Img variant="top" src={country.flag} className="ratio ratio-4x3 p-2" />
                                <Card.Body>
                                    <Card.Title> <strong>{country.name}</strong> </Card.Title>
                                    <Card.Text>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                    <p><strong>Population:</strong> {country.population}</p>
                                    {country.alpha3Code}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant='info' onClick={() => handleAddCountry(country)}>Add Country</Button>
                            </Card>
                        </Col> 
                    )
                }
            </Row>     
        </div>
    );
};

export default DisplayCountry;