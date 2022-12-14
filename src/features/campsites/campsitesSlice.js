//use a lower case file name for any file that does NOT export a react component

import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
}

//parseInt() turns an string into an integer
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured)
}



// export const selectRandomCampsite = () => {
//     // randomCampsiteIndex = Math.floor(Math.random() * CAMPSITES.length)
//     // return CAMPSITES[randomCampsiteIndex];
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)]
// }