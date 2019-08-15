import React from 'react';
import { useSelector } from 'react-redux'///hook found on google quest  from react-redux
import AddedFeature from './AddedFeature';

const AddedFeatures = () => {
  const forMyCarState= useSelector(state => state);//The selector will be called with the entire Redux store state as its only argument.

  return (
    <div className="content">
      <h6>Added features:</h6>
      {forMyCarState.car.features.length ? (
        <ol type="1">
          {forMyCarState.car.features.map(feature => (///grabbing state from the features and mapping over it to create a new array 
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (///ternary statement (if/else)
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
