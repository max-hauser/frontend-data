(function (d3, topojson) {
  'use strict';

  const svg = d3.select('svg');

  const projection = d3.geoNaturalEarth1();
  
  const pathGenerator = d3.geoPath().projection(projection);
  
  const g = svg.append('g'); 
  
  g.append('path')
    .attr('class', 'sphere')
    .attr('d', pathGenerator({type: 'Sphere'})) 
  
  svg.call(d3.zoom().on('zoom', () => {
    g.attr('transform', d3.event.transform);
  }));
  
  d3.json('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
    .then(data => {
      const countries = topojson.feature(data, data.objects.countries);
      const countryName = {};
      countries.features.forEach(country => {
        const countryID = country.id;
        const name = country.properties.name;
        countryName[countryID] = name;
      });    
      g.selectAll('path').data(countries.features)
        .enter().append('path')
          .attr('class', 'countries')
          .attr('d', pathGenerator)
        .append('title')
          .text(d => countryName[d.id])
    });  

}(d3,topojson));