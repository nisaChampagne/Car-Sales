import React from 'react';
import { useSelector } from 'react-redux'///hook found on google quest  from react-redux

const Total = ()=> {///props not needed as we have  the below working for us to drag information out of the redux store
  const totalState = useSelector(state => state);//The selector will be called with the entire Redux store state as its only argument.
  return (
    <div className="content">
      <h4>Total Amount: ${totalState.car.price + totalState.additionalPrice}</h4>{/* digging into state via redux store to grab out car.price added into the additionalPrice*/}
    </div>
    
  );
};

export default Total;
