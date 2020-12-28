import React from 'react';
import { Card, Col, Row, } from 'react-bootstrap';


const DisplayCountry = (props) => {
    console.log(props.countries);
    const countries = props.countries;
    return (
        <div>
            <Row>
                {
                    countries.map(country =>
                        <Col md={4}>
                            <Card border='dark' className='mb-3'>
                                <Card.Img variant="top" src={country.flag} className="ratio ratio-4x3 p-2" />
                                <Card.Body>
                                    <Card.Title> <strong>{country.name}</strong> </Card.Title>
                                    <Card.Text>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                    <p><strong>Population:</strong> {country.population}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> 
                    )
                }
            </Row>     
        </div>
    );
};

export default DisplayCountry;