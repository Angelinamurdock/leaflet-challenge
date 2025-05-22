# Leaflet Earthquake Visualization
**Creator**: Angelina Murdock  
**Date**: April 2025

## Table of contents
- [Overview](#overview)
- [Features](#features)
- [Deployment](#deployment)
- [Methodology](#methodology)
- [Resources](#resources)

## Overview
A interactive project exploring the visualization of earthquake data from the *United States Geological Survey*, or *USGS* using **JavaScript** and **Leaflet**. This map allows users to visualize all earthquakes that have happened in the last 30 days overlayed on different map layers. The data is displayed using markers that reflect the magnitude and depth of each earthquake. 

## Features
### Part 1: Map Features Overview
* **Tile Layers:** Choose between street and topographic maps.
* **Earthquake Data:** View all earthquakes that have occured in the last 30 days.
* **Magnitude Based-Radius:** Earthquake markers have a radius proportional to their magnitude.
* **Depth Colors:** Earthquake markers are colored based on their depth. 
* **Pop-ups:** Click on an earthquake to view its magnitude, location and depth.

### Part 1: Earthquake Map Visualization:

![Part 1: Earthquake Map Visualization](https://github.com/user-attachments/assets/4e9dc44c-4268-414e-bfe1-aa55b384b496)

### Part 2: Map Features Overview
* **Tile Layers:** Choose between satellite, street and topographic maps.
* **Earthquake Data:** View all earthquakes that have occured in the last 30 days.
* **Magnitude Based-Radius:** Earthquake markers have a radius proportional to their magnitude.
* **Depth Colors:** Earthquake markers are colored based on their depth. 
* **Pop-ups:** Click on an earthquake to view its magnitude, location and depth.
* **Techtonic Plate Lines:** Display techtonic plate boundaries on the map.

### Part 2: Earthquake Map Visualization:

![Part 2: Earthquake Map Visualization](https://github.com/user-attachments/assets/dabfb95b-8081-4d83-9706-72f82fcef8d9)

## Deployment
### GitHub Pages Links
* [Part 1: Basic Earthquake Map](https://angelinamurdock.github.io/leaflet-challenge/Leaflet-Part-1/)
* [Part 2: Enhanced Map with Techtonic Plate Overlay](https://angelinamurdock.github.io/leaflet-challenge/Leaflet-Part-2/)

### Steps to Deploy Locally
**1. Clone the Repository:**
```bash
git clone https://github.com/angelinamurdock/leaflet-challenge.git
```
**2. Open the Project:**
* Choose to display Part 1 (basic earthquake map) or Part 2 (enhanced map with techtonic plate lines).
* Open the `index.html` file within the corresponding folder.

## Methodology
### Data Processing and Visualization
**JavaScript Functions**: The app uses on JavaScript functions to retreive the earthquake geoJSON data and return this data in a specific way to create dynamic visualizations.

**Leaflet**: The app uses Leaflet to create an interactive map where users can explore earthquake data. The map allows users to interact with the data and get information on the magnitude, location and depth of each earthquake.

## Resources
* [**USGS GeoJSON Feed**](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
* **DU Bootcamp Module 15:** Utilized challenge files and class materials from the bootcamp.
* **ChatGPT:** Assisted with code explanations and debugging.
* [**Determining Earthquake Depths**](https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake) 
* [**Leaflet Legend Creation**](https://gis.stackexchange.com/questions/133630/adding-leaflet-legend) 
* [**ArcGIS Documentation**](https://developers.arcgis.com/documentation/portal-and-data-services/data-services/map-tile-services/display-map-tiles/) 