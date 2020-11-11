
import { specificaties, locaties, gebiedsbeheer, openingstijden, betaalmethodes } from "../datasets.js";

async function stadscode(stadnaam) {
    return await fetch(gebiedsbeheer)
        .then(response => response.json())
        .then(data => {
            const stad = data.filter(stad => stad.areamanagerdesc == stadnaam);
            const stadscode = parseInt(stad.map(code => code.areamanagerid));
            return stadscode;
        });
}

async function locatieGarages() {
    const stadcode = await stadscode("Amsterdam");
    return await fetch(locaties)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(locatie => locatie.areamanagerid == stadcode);
            const beschrijving = parkeergarage.map(garage => garage.areadesc)
            const coordinaten = parkeergarage.map(garage => garage.location)
            const id = parkeergarage.map(garage => garage.areaid);
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "beschrijving": beschrijving[index], "coordinaten": coordinaten[index] });
            return garageInformatie;
        })
}

async function garageSpecs() {
    const stadcode = await stadscode("Amsterdam");
    return await fetch(specificaties)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(locatie => locatie.areamanagerid == stadcode);
            const id = parkeergarage.map(garage => garage.areaid);
            const capaciteit = parkeergarage.map(garage => parseInt(garage.capacity));
            const opladen = parkeergarage.map(garage => parseInt(garage.chargingpointcapacity));
            const maximaleVoertuigHoogte = parkeergarage.map(garage => parseInt(garage.maximumvehicleheight));
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = {
                "capaciteit": capaciteit[index],
                "opladen": opladen[index],
                "maximaleVoertuigHoogte": maximaleVoertuigHoogte[index]
            });
            return garageInformatie;
        })
}

async function openingstijdenGarages() {
    const stadcode = await stadscode("Amsterdam");
    return await fetch(openingstijden)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(locatie => locatie.areamanagerid == stadcode);
            const id = parkeergarage.map(garage => garage.areaid);
            const altijdWegrijden = parkeergarage.map(garage => parseInt(garage.exitpossibleallday));
            const altijdOpen = parkeergarage.map(garage => parseInt(garage.openallyear));
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "altijdWegrijden": altijdWegrijden[index], "altijdOpen": altijdOpen[index] });
            return garageInformatie;
        })
}

async function betaalmethodeGarages() {
    const stadcode = await stadscode("Amsterdam");
    return await fetch(betaalmethodes)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(locatie => locatie.areamanagerid == stadcode);
            const id = parkeergarage.map(garage => garage.areaid);
            const betaalmethode = parkeergarage.map(garage => garage.paymentmethod);
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "betaalmethode": betaalmethode[index] });
            return garageInformatie;
        })
}

export { locatieGarages, garageSpecs, openingstijdenGarages, betaalmethodeGarages}