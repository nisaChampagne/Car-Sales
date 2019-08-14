// // Export Two Things - initialState, reducer fn

// const initialState = {
//     title: 'This is from Redux!!!!!!!!!',
//     editing: false,
//     members: [
//       { name: 'Brandi', dragonStatus: true },
//       { name: 'Josh', dragonStatus: false }
//     ]
//   };

//   export const titleReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'TOGGLE_EDITING':
//         return {
//           ...state,
//           editing: !state.editing
//         };
//       case 'UPDATE_TITLE':
//         return {
//           ...state,
//           title: action.payload,
//           editing: !state.editing
//         };
//       case 'ADD_MEMBER':
//         return {
//           ...state,
//           members: [
//             ...state.members,
//             { name: action.payload, dragonStatus: false }
//           ]
//         };
//       default:
//         return state;
//     }
//   };

//   // ADD onClick to "Update Title" button
//   // Dispatch a new action
//   // type: "UPDATE_TITLE"
//   // payload: new text for the tile

//   // Write a case for "UPDATE_TITLE"
//   // update the title property in state

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const CarReducers = (state = initialState, action) => {
  switch (action.type) {
    // case "TOGGLE_EDITING":
    //   return {
    //     ...state,
    //     editing: !state.editing
    //   };
    // case "UPDATE_TITLE":
    //   return {
    //     ...state,
    //     title: action.payload,
    //     editing: !state.editing
    //   };
    // case "ADD_MEMBER":
    //   return {
    //     ...state,
    //     members: [
    //       ...state.members,
    //       { name: action.payload, dragonStatus: false }
    //     ]
    //   };
    default:
      return state;
  }
};
