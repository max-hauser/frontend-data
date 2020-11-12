# Frontend Data

This repository contains my process of the @CMDA-TT Frontend Data course. During this course students are subjected to multiple ways of dealing with (external) datasets, how to clean them and to create an interactive datavisualisation.

In an attempt to create a realistic environment, students are working with a critically acclaimed newspaper called 'De Volkskrant'. Students will do a preliminary research on datasets from the RDW. With the datasets in mind they'll create a topic which journalists could write an article about. 

The purpose of this repository is to get continue with the concept created in @CMDA-TT Frontend Programmeren, and to actually create the data visualisation and make it interactive.

## Research Question

**Which garage is in the best for a getaway car in Amsterdam?**

subquestions/criteria:
- Which garages allow payment in cash?
  - dataset: [https://opendata.rdw.nl/resource/r3rs-ibz5.json](https://opendata.rdw.nl/resource/r3rs-ibz5.json)
  * In this dataset I only wanted to get the ```paymentmethod```
- Which garages allow big cars to enter?
  - dataset: [https://opendata.rdw.nl/resource/b3us-f26s.json](https://opendata.rdw.nl/resource/b3us-f26s.json)
  * In this dataset I required the information on the ```capacity```, the ```chargingpointcapacity``` and the ```maximumvehicleheight```
- Which garages are open at all times?
  - dataset: [https://opendata.rdw.nl/resource/figd-gux7.json](https://opendata.rdw.nl/resource/figd-gux7.json)
  * In this dataset I used the ```exitpossibleallday``` and ```openallyear``` data.
  
### Other datasets
* https://opendata.rdw.nl/resource/2uc2-nnv3.json
* https://opendata.rdw.nl/resource/t5pc-eb34.json

These two datasets were used to determine the coordinates and location of the garages.

### Link to datavisualisation

[Click here to see the data visualisation](https://max-hauser.github.io/frontend-data/)

### image of project

After watching a YouTube video on the movie Baby driver and so I came up with the question above.
The tricky issue with this concept is that is way too off-topic for the newspaper. But I asked my teacher and he asked the people over at the newspaper and I got the green light afterall. Looking back, this maybe wasn't the best topic to explore, because I didn't have a clear goal. I ended up creating a map which displays parking garages based on the filtered options of the form.

![final-kaart](https://github.com/max-hauser/frontend-data/blob/main/media/final.png)

### Inspiration

Firstly, my concept inspiration came from the movie called Baby driver, a bankheist movie. For the map and visualisation I watched video's of a guy named [Curran Kellehher](https://www.youtube.com/user/currankelleher) on youtube. specifically on world maps and the update pattern.  

### Data handling

1. First I create a couple of functions that that filter out all the relevant data specific to Amsterdam.
2. Then I remove all the data that isn't complete (for example all the undefined)
3. After that I get the filter data from the form
4. Finally I create and/or update the map

### Install guide

You can run it with the vs code extention called 'live server'

[Link to the extention](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### plagiarism and acknowledgements

* The teachers (they give very interesting lectures and adapt well with regards to the CoVid crisis/ working from home situation)
* Nino Schelcher (we give each other feedback and tips during the entire project)
* Stackoverflow (for the occational question)
* MDN Web Docs (for deepdiving and really understanding how something works)


