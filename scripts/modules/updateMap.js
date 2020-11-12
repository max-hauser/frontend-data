

async function updateMap(resultaat) {

    if(resultaat != null && Object.keys(resultaat).length == 0) {
        document.querySelector("#noresults").classList.add("show");
    }else{
        document.querySelector("#noresults").classList.remove("show");  
    }

    const amsterdam = "https://maps.amsterdam.nl/open_geodata/geojson.php?KAARTLAAG=GEBIED_STADSDELEN_EXWATER&THEMA=gebiedsindeling";

    var svg = d3.select("svg"),
        width = 800,
        height = 500

    var projection = d3.geoMercator()
        .center([4.84, 52.39])
        .scale(150000)
        .translate([width / 2, height / 2])

    const mapExists = d3.select("svg g");
    const g = svg.append('g');

    if (mapExists.empty()) {

        d3.json(amsterdam, function (data) {

            // Draw the map
            g.append("g")
                .selectAll("path")
                .data(data.features)
                .enter()
                .append("path")
                .attr("fill", "#001f3f")
                .attr("d", d3.geoPath()
                    .projection(projection)
                )
                .attr("stroke", "#0074D9")
                .call(d3.zoom().on('zoom', () => {
                    g.attr("transform", d3.event.transform);
                }))
            if(resultaat != null){
                updateMap(resultaat)
            }
        })

        return;
    }

    render()

    function render() {

        const mapPunten = [];

        resultaat.forEach((res) => {
            mapPunten.push(res.locaties.coordinaten)
        });

        d3.select("svg g g")
            .selectAll("circle")
            .remove()
            .exit()
            .data(mapPunten)
            .enter()

            .append("circle")
            .attr("cx", function (d) { return projection([d.longitude, d.latitude])[0] })
            .attr("cy", function (d) { return projection([d.longitude, d.latitude])[1] })
            .attr("r", 5)
            .attr("class", "circle")
            .style("fill", "#3D9970")
            .attr("stroke", "#FF851B")
            .attr("stroke-width", 1)
            .attr("cursor", "help")
            .append('title')
            .text(tooltip)

        function tooltip(d) {
            const garageInfo = resultaat.filter(data => data.locaties.coordinaten == d);
            const betaalmethode = garageInfo[0].betaalmethode;
            const beschrijving = garageInfo[0].locaties.beschrijving;
            const capaciteit = garageInfo[0].specificaties.capaciteit;
            const voertuigHoogte = garageInfo[0].specificaties.maximaleVoertuigHoogte;
            const bericht = beschrijving + " | capaciteit: " + capaciteit + " | Max Hoogte Auto: " + voertuigHoogte + " | betaalmethode: " + betaalmethode;
            return bericht;
        }
    }
}

updateMap(null);

export default updateMap;