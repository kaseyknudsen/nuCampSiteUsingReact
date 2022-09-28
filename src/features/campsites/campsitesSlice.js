//use a lower case file name for any file that does NOT export a react component

import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    // randomCampsiteIndex = Math.floor(Math.random() * CAMPSITES.length)
    // return CAMPSITES[randomCampsiteIndex];
    return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
}