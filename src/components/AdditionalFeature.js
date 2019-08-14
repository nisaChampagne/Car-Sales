import React from 'react';
import { useDispatch } from 'react-redux'
import { ADDCAR_FEATURES } from '../actions/carActions';

const AdditionalFeature = props => {
  const add = useDispatch();
  const addItem = e => {
    add({ type: ADDCAR_FEATURES, payload: props.feature })
  }
  return (
    <li>
      <button className="button" onClick={addItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
