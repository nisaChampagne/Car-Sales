import { ADDCAR_FEATURES, TAKEAWAY_FEATURE } from "../actions/carActions";///passing my actions into my reducer.js


const initialState = {////...state, car: {...state.car, features: [...state.car.features] to access features in initial state}
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Dodge Charger",///changed because I like dodge chargers
    image:
      "https://fs2.ebait.biz/c4RpU5aF/review_337034_1.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const CarReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDCAR_FEATURES:///add
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        store: state.store.filter(feature => {
          if (action.payload.id === feature.id) {
            return false;
          } else {
            return true;
          }
        }),
        additionalPrice: state.additionalPrice + action.payload.price///need this as we need the total to update
      };
    case TAKEAWAY_FEATURE:///remove
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(feature => {        {/*..filter through car.features */}
            if (feature.id === action.payload.id) {
              return false;
            } else {
              return true;
            }
          })
        },
        store: [...state.store, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price////need this as we need the total to update
      };
    default:
      return state;
  }
};
