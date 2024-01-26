#### MIT xPRO Fullstack Development
## Real-Time Bus Tracker
### The Innovation Express: MIT ➔ Harvard bus line
Simulation link: [real-time-bus-tracker](https://marialee222.github.io/real-time-bus-tracker/)

## Description
The Real-Time Bus Tracker is a web application that visualizes the movement of a bus along a predefined route with interactive features. The application uses Mapbox GL JS for mapping and provides a real-time tracking experience. 

### Improvements
Updates made to enhance user experience and functionality:
- code was separated into functions for readability
- set the height of the map to be 100% of the viewpoint height
- button styling
- cursor pointer
- button hover animation
- moved script tags to the end of the <body> section
- updated button label
- created a line layer to visually represent the bus route on the map

## How to Run
To run the Real-Time Bus Tracker on your machine, follow these steps:
1. Clone the repo: git clone https://github.com/marialee222/real-time-bus-tracker.git
2. Open the project directory: cd real-time-bus-tracker
3. Get a Mapbox Access Token:</br>
	- Visit [Mapbox](https://www.mapbox.com/) and sign up for an account.</br>
	- Create a new access token in your Mapbox account dashboard.</br>
4. Replace Access Token in mapanimation.js:</br>
	- Open the mapanimation.js file.</br>
	- Replace the placeholder token with your actual Mapbox access token.</br>
5. Open index.html in your web browser.
6. Explore the Real-Time Bus Tracker!</br>
	- Click the button ("Click Here MIT to Harvard") to initiate the animation that tracks the bus along the route.

<img width="1171" alt="map" src="https://github.com/marialee222/real-time-bus-tracker/assets/150623001/520cb71b-c20f-4761-ae63-0188a070eb49">


## Roadmap of Future Improvements
Future improvements for the Real-Time Bus Tracker include:
- When a user touches a stop, the schedule will appear on the bottom.
- On the schedule, user will find the actual day and the coming days with the next departing time.
- The schedule will include the stop name, address and time until the next bus.</br>
	Example:  
	MIT
	77 Mass Ave, Cambridge MA</br>
  	<i>Next bus in 3 min</i>
   
:star: Feel free to contribute ideas or collaborate on these enhancements! :star:

### License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

