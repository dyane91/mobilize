# About
This project displays a list of public events and their details.

## How to run the app

1. Clone the repo
2. `cd mobilize`
3. `npm install`
4. `npm start`
5. The app should open `localhost:3000` but if it does not, just go there.

## Design decisions and architecture

Tools: For this challenge I use React, Redux, Bootstrap and Google Maps API.

### Design desicions:

- I put a big image to call for extra attention.
- I used card groups to display all the events and their main information such as name, date and address.
- Also, an image is displayed on each card to make it more visual.
- I used an even number of events per page load so the arrangement is more even.
- I put an indicator around the page number in the pagination section so the user can know what page they are in.
- There are a previous and next buttons to move between pages for easy navigation. I think this is important since there are about 4000 pages.
- There is also a footer with a strong color to mark the end of the page.
- When you click on an event, it goes to event details page where you can find more information about the event.
- To display the event location I used Google Maps API.
- I highlighted the date with a red color on the single event page because it is an important detail.
- I included a small section within a box with the more important information of the event such as the date and location.
- Bootstrap helped me to create a more visual components.

### Architecture:

- The app starts making an http call from my redux store to Mobilize's events API to retrieve a list of events.
- Once I get all the data, my react main component renders all the events.
- When an event is selected, I make another http call using the unique `id` event and use a different route to show the single event details.
- Also, there is a mark on the map and I get it by using the latitude and longitude from the event data.
- While Redux was not necessary, it helped me to maintain all the state in one place.

### Notes:

- I would have like to hide the API key but it will be more work for you guys to add it.
- If I would have more time, I would like to make the app responsive.
