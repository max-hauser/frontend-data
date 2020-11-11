

// const datasetATM = "https://gist.githubusercontent.com/ketankhairnar/8986fc26ea3e1a41d1fcba281069085e/raw/fa3ed3662c7734dd3b272e9f0de5334a91f631c4/atm.json";
// const datasetPolitie = 'https://api.politie.nl/v4/politiebureaus/all?offset=0';
// const datasetBetaalmethodes = "https://opendata.rdw.nl/resource/r3rs-ibz5.json";
// const datasetSpecificatiesParkeergebied = "https://opendata.rdw.nl/resource/b3us-f26s.json";
// const datasetParkingOpen = "https://opendata.rdw.nl/resource/figd-gux7.json";
// const datasetGeoParking = "https://opendata.rdw.nl/resource/t5pc-eb34.json";

// const datasets = {
//   "atm" : datasetATM,
//   "politie" : datasetPolitie,
//   "betaalmethodes" : datasetBetaalmethodes,
//   "specificatiesParkeergebied" : datasetSpecificatiesParkeergebied,
//   "parkingOpen" : datasetParkingOpen,
//   "geoParking" : datasetGeoParking
// };

// Object.values(datasets).map(dataset => {
//   console.log(dataset)
//   fetch('https://cors-anywhere.herokuapp.com/' + dataset)
//   .then(response => response.json())
//   .then(data => console.log(data));
// });

//  async function atm() {
//   const datasetATM = "https://gist.githubusercontent.com/ketankhairnar/8986fc26ea3e1a41d1fcba281069085e/raw/fa3ed3662c7734dd3b272e9f0de5334a91f631c4/atm.json";

//   fetch('https://cors-anywhere.herokuapp.com/' + datasetATM)
//   .then(response => response.json())
//   .then(data =>  {
//     const amsterdam = data.filter(atm => atm.address.city == "Amsterdam");
//     let coordinaten = amsterdam.map(locatie => locatie.address.geoLocation)
//     coordinaten = coordinaten.map(location => 
//       Object.entries(location).reduce(
//           (obj, [key, value]) => (obj[key] = parseFloat(value), obj), 
//           {}
//       )
//     );
//     generateMap(coordinaten)
//   })
// }



// const garageBtn = document.querySelector("#garages");
// const atmBtn = document.querySelector("#atm");
// const policeBtn = document.querySelector("#police");
// const bankBtn = document.querySelector("#bank");

// const filterbtns = [garageBtn, atmBtn, policeBtn, bankBtn];

// filterbtns.forEach(btn => {
//   btn.addEventListener("change", filterHandler);
// });


// function filterHandler(event) {
//   const subject = event.target.id;
//   const checked = event.target.checked;

//   if(subject == "garages" && checked == true){
//     showGarages();
//   }else if(subject == "garages" && checked == false){
//     hideGarages();
//   }
// }

// async function showGarages() {
//   const dataset = await fetch()
// }

// generateMap()

// import 'regenerator-runtime/runtime';

// async function generateMap() {

// const amsterdam = "https://maps.amsterdam.nl/open_geodata/geojson.php?KAARTLAAG=GEBIED_STADSDELEN_EXWATER&THEMA=gebiedsindeling";

// // The svg
// var svg = d3.select("svg"),
//     width = 800,
//     height = 500


// // Map and projection
// var projection = d3.geoMercator()
//     .center([4.97, 52.35])
//     .scale(80000)
//     .translate([ width/2, height/2 ])  

// // Load external data and boot
// d3.json(amsterdam, function(data){

//     // Draw the map
//     svg.append("g")
//         .selectAll("path")
//         .data(data.features)
//         .enter()
//         .append("path")
//           .attr("fill", "#fff")
//           .attr("d", d3.geoPath()
//               .projection(projection)
//           )  
//           .attr("stroke", "black")
// })
// }