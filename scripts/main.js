import filterGarages from "./modules/filterGarages.js";

/*

This is the main file. From here the whole process is started.

*/

filter.addEventListener('submit', (event)=>{

    // This function gets the information of the filter and passes it on to the filterGarages function.

    event.preventDefault();
    const betaalmethode = event.target[0].value;
    const altijdWegrijden = event.target[1].value;
    const altijdOpen = event.target[2].value;
    const capaciteit = event.target[3].value;
    const maximaleVoertuigHoogte = event.target[4].value;
    const opladen = event.target[5].value;

    const settings = {
        betaalmethode: betaalmethode,
        altijdWegrijden: altijdWegrijden,
        altijdOpen: altijdOpen,
        capaciteit: capaciteit,
        maximaleVoertuigHoogte: maximaleVoertuigHoogte,
        opladen: opladen
    }

    filterGarages(settings)
})
