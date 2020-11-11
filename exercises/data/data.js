// import 'regenerator-runtime/runtime';

// //  //async function dataset() {



// // datasets.forEach(dataset => {
// //   fetch('https://cors-anywhere.herokuapp.com/' + dataset)
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// // });

// const dataset_atm = "https://gist.githubusercontent.com/ketankhairnar/8986fc26ea3e1a41d1fcba281069085e/raw/fa3ed3662c7734dd3b272e9f0de5334a91f631c4/atm.json";
// const dataset_politie = 'https://api.politie.nl/v4/politiebureaus/all?offset=0';


// const atm = fetch('https://cors-anywhere.herokuapp.com/' + dataset_atm);
// const politie = fetch('https://cors-anywhere.herokuapp.com/' + dataset_politie);

// Promise.all([atm, politie])
//   .then(files => {
//     files.forEach(file => {
//       process( file.json() )
//     })
//   })

// let process = ( promise ) =>  {
//   promise.then(data =>{
//     console.log(data);
//   })
// }

const dataset = "https://map.data.amsterdam.nl/maps/parkeervakken?REQUEST=Getfeature&VERSION=1.1.0&SERVICE=wfs&TYPENAME=alle_parkeervakken&outputformat=geojson";

fetch(dataset)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })