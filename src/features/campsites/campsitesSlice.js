 //use a lower case file name for any file that does NOT export a react component
import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState 
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

//parseInt() turns an string into an integer
export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
        );
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured)
};



// export const selectRandomCampsite = () => {
//     // randomCampsiteIndex = Math.floor(Math.random() * CAMPSITES.length)
//     // return CAMPSITES[randomCampsiteIndex];
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
// }