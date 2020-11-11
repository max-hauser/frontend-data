import 'regenerator-runtime/runtime';
 
 async function atm() {

  const datasets = []

  const parkeerPlekken = "https://opendata.rdw.nl/resource/t5pc-eb34.json";

  fetch(parkeerPlekken)
    .then(response => response.json())
    .then(data =>{
      const coordinaten = data.map(parkeerplek => parkeerplek.location);
      const latLong = coordinaten.filter(coords => coords.latitude)
    })

  const geldautomaten = "https://gist.githubusercontent.com/ketankhairnar/8986fc26ea3e1a41d1fcba281069085e/raw/fa3ed3662c7734dd3b272e9f0de5334a91f631c4/atm.json";

  fetch(geldautomaten)
  .then(response => response.json())
  .then(data =>  {
    const amsterdam = data.filter(atm => atm.address.city == "Amsterdam");
    let coordinaten = amsterdam.map(locatie => locatie.address.geoLocation)
    coordinaten = coordinaten.map(location => 
      Object.entries(location).reduce(
          (obj, [key, value]) => (obj[key] = parseFloat(value), obj), 
          {}
      )
    );
    datasets.push(coordinaten)
  })

  const politie = 'https://api.politie.nl/v4/politiebureaus/all?offset=0';

  fetch('https://cors-anywhere.herokuapp.com/' + politie)
  .then(response => response.json())
  .then(data =>  {
    const amsterdam = data.politiebureaus.filter(bureau => bureau.postadres.plaats == "Amsterdam");
    const coordinaten = amsterdam.map(locatie => locatie.locaties)
    const result = coordinaten.map(cor => cor.pop());
    datasets.push(result)
  }) 
  
  console.log(datasets)

  generateMap(datasets)
}

async function generateMap(atm) {

const amsterdam = "https://maps.amsterdam.nl/open_geodata/geojson.php?KAARTLAAG=GEBIED_STADSDELEN_EXWATER&THEMA=gebiedsindeling";

// The svg
var svg = d3.select("svg"),
    width = 800,
    height = 500


// Map and projection
var projection = d3.geoMercator()
    .center([4.95, 52.35])
    .scale(100000)
    .translate([ width/2, height/2 ])

// Create data for circles:
var markers = [
  {long: 4.91488, lat: 52.377626},
  {long: 4.884537, lat: 52.384982},
  {long: 4.93696916, lat: 52.313426901},
  {long: 4.9087, lat: 52.3698},
  {long: 4.940488, lat: 52.313686},
  {long: 4.941235, lat: 52.311676}
];    

// Load external data and boot
d3.json(amsterdam, function(data){

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )  
          .attr("stroke", "black")
          .attr("opacity", .3)
})

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(atm)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.lng, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.lng, d.lat])[1] })
        .attr("r", 5)
        .attr("class", "circle")
        .style("fill", "green")
        .attr("stroke", "gold")
        .attr("stroke-width", 1)
        .attr("fill-opacity", .4)      
}

atm()