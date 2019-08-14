// // STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

  
///action creators
export const takeAwayFeature = item => {
    return { type: 'TAKEAWAY_FEATURE'}
};
takeAwayFeature();

export const addItem = item => {
    return { type: 'ADD_ITEM'};
}
addItem();