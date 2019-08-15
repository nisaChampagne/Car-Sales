import React from 'react';
import { useDispatch } from 'react-redux'///hook found on google quest  from react-redux
import { TAKEAWAY_FEATURE } from '../actions/carActions';////bringing my takeawayfeature type over from actions folder

const AddedFeature = props => {/// tried using useSelector here but didnt work as we did pass props from AddedFeatures.js 
  const remove= useDispatch();///utilizing my useDispatch hook from react-redux 

  const takeAwayFeature = e => {
    e.preventDefault();
    remove({ type: TAKEAWAY_FEATURE , payload: props.feature})///<-- here
  }
  return (
    <li>
      <button className="button" onClick={takeAwayFeature}>X</button> 
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
