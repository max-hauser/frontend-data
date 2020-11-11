
import parkeerData from "./parkeerData.js";
import updateMap from "./updateMap.js"


async function filterGarages(settings) {
    const alleGarages = await parkeerData();

    const resultaat = alleGarages.filter(garage =>
        garage.betaalmethode == settings.betaalmethode &&
        garage.openingstijden.altijdWegrijden == settings.altijdWegrijden &&
        garage.openingstijden.altijdOpen == settings.altijdOpen &&
        garage.specificaties.capaciteit >= settings.capaciteit &&
        garage.specificaties.maximaleVoertuigHoogte >= settings.maximaleVoertuigHoogte &&
        garage.specificaties.opladen == settings.opladen
    )

    updateMap(resultaat);
}

export default filterGarages;