fetch('https://api.politie.nl/politiebureaus/v1?lat=52.379189&lon=4.899431&radius=10')
.then(response => response.json())
.then(data => console.log(data))