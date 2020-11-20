/*

This file contains all the functions that filter out the Amsterdam data from all the other cities.

*/


import { specificaties, locaties, openingstijden, betaalmethodes } from "../datasets.js";

async function locatieGarages() {
    return await fetch(locaties)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(item => item.areaid.startsWith("363"));
            const beschrijving = parkeergarage.map(garage => garage.areadesc)
            const coordinaten = parkeergarage.map(garage => garage.location)
            const id = parkeergarage.map(garage => garage.areaid);
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "beschrijving": beschrijving[index], "coordinaten": coordinaten[index] });
            return garageInformatie;
        })
}

async function garageSpecs() {
    return await fetch(specificaties)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(item => item.areaid.startsWith("363"));
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
    return await fetch(openingstijden)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(item => item.areaid.startsWith("363"));
            const id = parkeergarage.map(garage => garage.areaid);
            const openingsTijd = parkeergarage.map(garage => parseInt(garage.enterfrom));
            const sluitingsTijd = parkeergarage.map(garage => parseInt(garage.enteruntil));
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "openingstijd": openingsTijd[index], "sluitingstijd": sluitingsTijd[index] });
            return garageInformatie;
        })
}

async function betaalmethodeGarages() {
    return await fetch(betaalmethodes)
        .then(response => response.json())
        .then(data => {
            const parkeergarage = data.filter(item => item.areaid.startsWith("363"));
            const id = parkeergarage.map(garage => garage.areaid);
            const betaalmethode = parkeergarage.map(garage => garage.paymentmethod);
            let garageInformatie = {};

            id.forEach((garageNaam, index) => garageInformatie[garageNaam] = { "betaalmethode": betaalmethode[index] });
            return garageInformatie;
        })
}

export { locatieGarages, garageSpecs, openingstijdenGarages, betaalmethodeGarages}