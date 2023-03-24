# Thanks for checking out Marko

# Installation

```
npx @marko/create marko-app --template basic
cd marko-app
npm install
npm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `npm run dev` to start the development server
- Run `npm run build` to build a production-ready node.js server
- Run `npm start` to run the production server

## Walkthrough / Features
* To properly run, add in a Giphy API key - https://developers.giphy.com/dashboard/ -> "Create an App" -> add in API key.
* The page loads into a direct search for Nyan Cat so that a user can immediately play with the card items.
* The placeholder is auto populated with the search (Nyan Cat) term and then will default to a generic placeholder after any text has been added.
* A user can begin typing into the search box to find new results to then replace what is seen on the page.
* The user will be provided 10 images to start and provided additional items as they get closer to the bottom - using the api we can just fetch sections of the data and append it back to the running list so that we only fetch what we need in moderation. 
* Each card has a title, a gif, and (up to) two additional actions.
* When the card is clicked (or tabbed and entered) the card will be scrolled into view and scaled up in size above the rest of the cards.
* If the user clicks on the Copy field the gif url will be copied to the clipboard and the text will momentarily change to say "copied".
* If the user has the source action, clicking on it will open a new tab to where the gif originated from. 
* If no results are found then a alternative view is shown with a notification and a gif to go along with it. 
* The page has been quickly ran through for accessability and responsive design.

## Enhancements
* Better understand state and how it is rehydrated throughout the lifecycle.
* Additional checks with other browsers - used primarily chrome.
* Additional error handling.
* break apart the +page.marko content like the components are done
* Swap the fetchAndReturn util function for Axios
* Perhaps swap the setTimeout logic used in the copy/copied text notification from a DOM mutation to a state property.

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files.  Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).

 

