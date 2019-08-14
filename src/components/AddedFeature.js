import React from 'react';
import { useDispatch } from 'react-redux';
import { TAKEAWAY_FEATURE } from '../actions/carActions';

const AddedFeature = props => {
  const remove= useDispatch();

  const takeAwayFeature = e => {
    e.preventDefault();
    remove({ type: TAKEAWAY_FEATURE , payload: props.feature})
  }
  return (
    <li>
      <button className="button" onClick={takeAwayFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
