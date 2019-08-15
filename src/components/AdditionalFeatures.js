import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector } from 'react-redux'

const AdditionalFeatures = () => {
  const additionalState = useSelector( state => state);////The selector will be called with the entire Redux store state as its only argument.
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalState.store.length ? (
        <ol type="1">
          {additionalState.store.map(s=> ///grabbing state from the store and mapping over it to create a new array 
            (<AdditionalFeature key={s.id} feature={s} />)
          )}
        </ol>
      ) : (//^ ternary  statement (if/else)
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
