# Frontend Data

This repository contains my process of the @CMDA-TT Frontend Data course. During this course students are subjected to multiple ways of dealing with (external) datasets, how to clean them and to create an interactive datavisualisation.

In an attempt to create a realistic environment, students are working with a critically acclaimed newspaper called 'De Volkskrant'. Students will do a preliminary research on datasets from the RDW. With the datasets in mind they'll create a topic which journalists could write an article about. 

## Research Question

**Which garage is in the best for a getaway car in Amsterdam?**

subquestions/criteria:
- Which garages allow payment in cash?
- Which garages allow big cars to enter?
- Which garages are open at all times?
- Which garages are in the best location with regards to getting out of the city?

### Link to datavisualisation

[Click here to see the data visualisation](https://max-hauser.github.io/frontend-data/)

### image of project

![final-kaart](https://github.com/max-hauser/frontend-data/blob/main/media/final.png)

![statische-kaart](https://github.com/max-hauser/frontend-data/blob/main/media/statische-kaart.png)

![politiebureaus-kaart](https://github.com/max-hauser/frontend-data/blob/main/media/politiebureaus-amsterdam.png)

### Data handling

#### The datasets

* https://opendata.rdw.nl/resource/b3us-f26s.json
* https://opendata.rdw.nl/resource/t5pc-eb34.json
* https://opendata.rdw.nl/resource/2uc2-nnv3.json
* https://opendata.rdw.nl/resource/figd-gux7.json
* https://opendata.rdw.nl/resource/r3rs-ibz5.json

#### Filtering the data
1. First I create a couple of functions that that filter out all the relevant data specific to Amsterdam.
2. Then I remove all the data that isn't complete
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


