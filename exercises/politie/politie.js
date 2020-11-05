import 'regenerator-runtime/runtime';

 async function politiebureaus() {
  const politie = 'https://api.politie.nl/v4/politiebureaus/all?offset=0';

  fetch('https://cors-anywhere.herokuapp.com/' + politie)
  .then(response => response.json())
  .then(data =>  {
    const amsterdam = data.politiebureaus.filter(bureau => bureau.postadres.plaats == "Amsterdam");
    const coordinaten = amsterdam.map(locatie => locatie.locaties)
    const result = coordinaten.map(cor => cor.pop());
    generateMap(result)
  })
}

async function generateMap(politie_data) {

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
console.log(markers)
console.log(politie_data)

    // Add circles:
    svg
      .selectAll("myCircles")
      .data(politie_data)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.longitude, d.latitude])[0] })
        .attr("cy", function(d){ return projection([d.longitude, d.latitude])[1] })
        .attr("r", 5)
        .attr("class", "circle")
        .style("fill", "blue")
        .attr("stroke", "red")
        .attr("stroke-width", 1)
        .attr("fill-opacity", .4)      
}

politiebureaus()