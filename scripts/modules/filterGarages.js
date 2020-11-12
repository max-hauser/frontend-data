
import parkeerData from "./parkeerData.js";
import updateMap from "./updateMap.js"


async function filterGarages(settings) {

    // This function gets the settings which holds the filter results of the user
    // Then it gets all the garages and filters it based on the filter results of the user
    // Finally it sends the filtered garages-data to the updateMap function

    const alleGarages = await parkeerData();

    const resultaat = alleGarages.filter(garage =>
        garage.betaalmethode == settings.betaalmethode &&
        garage.openingstijden.altijdWegrijden == settings.altijdWegrijden &&
        garage.openingstijden.altijdOpen == settings.altijdOpen &&
        garage.specificaties.capaciteit >= settings.capaciteit &&
        garage.specificaties.maximaleVoertuigHoogte >= settings.maximaleVoertuigHoogte &&
        garage.specificaties.opladen >= settings.opladen
    )


    updateMap(resultaat);
}

export default filterGarages;