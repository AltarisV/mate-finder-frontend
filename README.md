[![JavaScript CI with npm](https://github.com/SpiegelV/mate-finder-frontend/actions/workflows/npm.yml/badge.svg)](https://github.com/SpiegelV/mate-finder-frontend/actions/workflows/npm.yml)

# mate-finder-frontend

Mate-Finder: A University project for the Business Computing 3rd semester-course "Web Technologies". 
Project developed by: Lucas Leiva (MNr. 579799) and Leon Schüßler (MNr. 579906). 
A small Web-Application for students to rate different brands and flavours of Mate-Softdrinks and save those ratings online. 
The plan is to later on add the ability to search for, and find those kinds of drinks via a Maps API.

This is the Front-End of the Project.

## Using the app

### Home, /Flavours and /About

These tabs serve to introduce the user to the website, mate-drinking and the project.

### /Mates
In the Mates tab, users can create Mates by clicking on the "Add a Mate!"-button, which opens up a sidebar where the user 
can specify the details. 
A Mate needs to have a Name and a Price (which can't be 0). After clicking on "Create", the Mate is created and shown on screen along
the other Mates.
If the name of the Mate created matches the name
of a Mate in /assets/matepics, the MateCard gets that picture when showing them on the site.
The user can click on "Rate this Mate" on each MateCard and change the shown stars and number (for accessibility reasons),
but the correct communication for sending that rating to the Backend is not yet implemented. As such, all Mates are rated 
as a static 5 Stars when shown on the site.

### /Finder
The Finders Tab asks for the users location on entering. Please provide the Browser your location, otherwise you will see yourself
going for a swim in the Gulf of Guinea.
Clicking on "Activate MateFinder!" sends a request to the Google Places API, locating nearby supermarkets that might or might not
have Mate in stock for you to buy. These supermarkets are then assigned a marker, represented by a Mate-Bottle. This action sometimes 
takes a bit if Heroku needs to wake up first.
The API Request is handled through a self-hosted proxy (forked from [this project](https://github.com/Rob--W/cors-anywhere) by Rob--W) 
hosted at: https://cors-proxy-webtech.herokuapp.com/ to avoid CORS. The API key is protected via the Google Clouds platform.

Unfinished Features will be implemented once grading for this project has been completed.
