import React from 'react';

const AddCountries = (props) => {
  const addedCountries = props.addCountries;
  return (
    <div>
      <h1>Addded Countries: {addedCountries.length}  </h1>
    </div>
  );
};

export default AddCountries;