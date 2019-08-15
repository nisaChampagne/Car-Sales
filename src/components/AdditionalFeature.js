import React from 'react';
import { useDispatch } from 'react-redux'///hook found on google quest  from react-redux
import { ADDCAR_FEATURES } from '../actions/carActions';////bringing my addItem type over from actions folder

const AdditionalFeature = props => {/// tried using useSelector here but didnt work as we did pass props from AdditionalFeatures.js 
  const add = useDispatch();///utilizing my useDispatch hook from react-redux 
  const addItem = () => {
    add({ type: ADDCAR_FEATURES, payload: props.feature })///<-- here
  }
  return (
    <li>
      <button className="button" onClick={addItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
