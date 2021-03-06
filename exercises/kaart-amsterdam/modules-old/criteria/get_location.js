/*
First I import the data from the geoParking function. Later I will
send this data to a map function that will put the cordinates on a map.
*/

import geoParking from "./geo_parking.js";

async function getLocations(areaIds) {
  return await geoParking(areaIds)
}

export default getLocations;