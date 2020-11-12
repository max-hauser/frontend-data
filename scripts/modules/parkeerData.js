import { locatieGarages, garageSpecs, openingstijdenGarages, betaalmethodeGarages } from "./cleanData/cleanData.js";

async function parkeerData() {

    /*
    
    This function first awaits the data which holds all the information of the garages in Amsterdam.
    Then it combines all the seperate information and makes them into garage objects.
    Finally it filters out the objects which hold missing information.
    
    */


    const specificaties = await garageSpecs();
    const locaties = await locatieGarages();
    const openingstijden = await openingstijdenGarages();
    const betaalmethode = await betaalmethodeGarages();

    const parkeerInformatie = [specificaties, locaties, openingstijden, betaalmethode];

    const keys = [];

    parkeerInformatie.forEach((dataset) => {

        const key = Object.keys(dataset);

        if (!keys.includes(key)) {
            keys.push(key);
        }
    });



    let allKeys = [].concat.apply([], keys);
    allKeys = [...new Set(allKeys)].sort();

    let output = [];

    for (let i = 0; i < allKeys.length; i++) {

        if(betaalmethode[allKeys[i]] == null){
            betaalmethode[allKeys[i]] = "363_DEFAULT";
        }

        output.push(
            {
                "id": allKeys[i],
                "specificaties": specificaties[allKeys[i]],
                "locaties": locaties[allKeys[i]],
                "openingstijden": openingstijden[allKeys[i]],
                "betaalmethode": Object.values(betaalmethode[allKeys[i]]).pop()
            }

        )
    }

    const result = [];

    output.forEach((garage) => {

        if (Object.values(garage).indexOf(undefined) > -1 == false) {
            result.push(garage);
        }
    });

    return result;
}

export default parkeerData;