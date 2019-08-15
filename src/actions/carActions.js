export const TAKEAWAY_FEATURE = 'TAKEAWAY_FEATURE';
export const ADDCAR_FEATURES = 'ADDCAR_FEATURES';

// // STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

  
///action creators
export const takeAwayFeature = () => {
    return { type: 'TAKEAWAY_FEATURE'}
};
takeAwayFeature();

export const addItem = () => {
    return { type: 'ADDCAR_FEATURES'};
}
addItem();