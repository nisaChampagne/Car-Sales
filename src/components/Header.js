import React from 'react';
import { useSelector } from 'react-redux'///cool hook from react-redux

const Header = () => {///props not needed as we have  the below working for us to drag information out of the redux store
  const headerState = useSelector(state => state);//The selector will be called with the entire Redux store state as its only argument.

  return (
    <>
      <figure className="image is-128x128">
        <img src={headerState.car.image} alt={headerState.car.name} />{/* digging in state from redux store to grab the car.name and car.image*/}
      </figure>
      <h2>{headerState.car.name}</h2>{/* digging in state from redux store to grab the car.name*/}
      <p>Amount: ${headerState.car.price}</p>{/* digging in state from redux store to grab the car.price*/}
    </>
  );
};

export default Header;
