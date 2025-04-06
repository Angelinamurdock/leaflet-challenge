# Leaflet Earthquake Visualization
**Creator**: Angelina Murdock  
**Date**: April 2025

## Table of contents
- [Overview](#overview)
- [Deployment](#deployment)
- [Features](#features)
- [Methodology](#methodology)
- [Resources](#resources)

## Overview
A interactive project exploring the biodiversity of belly buttons using **JavaScript**. This app allows users to visualize different species of bacteria found in the belly buttons of various test subjects, displayed using data visualizations and interactive charts.

all earthquakes in the last 30 days

### Dashboard Example:

![Dashboard Example](dashboard_example/dashboard_image.png)

## Deployment
This app is deployed on **GitHub Pages**: [Click here to deploy the app](https://angelinamurdock.github.io/belly-button-challenge/)

## Features
`samples.json`: Contains demographic information and sample data for all of the test subjects, including bacteria culture data.

`app.js`:
- Implements a bar chart to visualize data of the top 10 bacteria cultures found in each test subject.
- Implements a bubble chart for visualizing data of the number of bacteria cultures per sample by OTU ID.
- Loop through metadata to get the demographic info for each individual and populates it into a panel.

`index.html`: The main HTML file that connects all components of the app.

## Methodology
### Data Processing and Visualization
**JavaScript Functions**: The app relies on JavaScript functions to handle data extraction, dynamic visualization updates and interactivity. Key functions include:
- Loading and parsing JSON data from `samples.json`.
- Uploading charts and panels based on user interaction.

**Plotly Data Visualizations**: The app uses Plotly to create interactive bar and bubble charts. Plotly allows users to interact with the data points, making the visualizations both informative and engaging.

## Resources
* **USGS GeoJSON Feed:** http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
* **DU Bootcamp Module 15:** Utilized challenge files and class materials from the bootcamp.
* **ChatGPT:** Assisted with code explanations and debugging.
* **Determining Earthquake Depths:** https://www.usgs.gov/programs/earthquake-hazards/determining-depth-earthquake 