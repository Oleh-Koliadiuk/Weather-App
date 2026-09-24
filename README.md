# Weather App

A responsive weather application built with vanilla HTML, CSS, and JavaScript. The application provides current weather information for 24 Ukrainian cities using the Open-Meteo API.

## Features

- Select a city from the sidebar.
- Display current weather information for the selected city.
- Display:
  - Temperature
  - Relative humidity
  - Apparent temperature
  - Precipitation
  - Wind speed
  - Weather condition

- Refresh weather data for the currently selected city.
- Persist the selected city using `localStorage`.
- Restore the selected city and its active state after page reload.
- Responsive layout for desktop, tablet, and mobile devices.
- Custom favicon and application icons.

## Technologies

- HTML5
- CSS3
- JavaScript (ES Modules)
- Open-Meteo API
- Web Storage API (`localStorage`)

## Project Structure

```text
weather-app/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── .editorconfig
│
├── assets/
│   └── icons/
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       └── site.webmanifest
│
├── src/
│   ├── app.js
│   ├── api.js
│   ├── cities.js
│   └── storage.js
│
└── styles/
    └── style.css
```

## Architecture

The project separates application logic, API communication, city data, and local storage.

### `src/app.js`

The main application module. It:

- Handles city selection.
- Manages the currently selected city.
- Requests weather data.
- Updates the DOM.
- Handles the Refresh button.
- Restores the selected city on page load.
- Updates the active city button.
- Converts weather codes into readable descriptions.

### `src/api.js`

Contains the `getWeather()` function responsible for:

- Sending requests to Open-Meteo.
- Checking the HTTP response.
- Parsing the JSON response.
- Returning weather data to the application.

The API module does not contain DOM or UI logic.

### `src/cities.js`

Contains the list of supported Ukrainian cities and their geographic coordinates.

Each city is represented by an object containing:

```js
{
  name: "Kyiv",
  latitude: 50.4501,
  longitude: 30.5234
}
```

### `src/storage.js`

Handles persistence of the selected city using the browser `localStorage` API.

### `styles/style.css`

Contains the application styling, including:

- Sidebar navigation
- Header controls
- Weather information cards
- Buttons and active states
- Responsive layouts
- Colors, spacing, typography, and visual effects

### `assets/icons/`

Contains favicon and application icon files generated for the project.

## Weather Data

The application uses the [Open-Meteo API](https://open-meteo.com/) to retrieve current weather data.

The current request includes:

```text
temperature_2m
relative_humidity_2m
apparent_temperature
precipitation
weather_code
wind_speed_10m
```

WMO weather codes are converted into readable weather descriptions such as:

- Clear Sky
- Cloudy
- Fog
- Drizzle
- Rain
- Snow
- Rain Showers
- Snow Showers
- Thunderstorm

## Application Flow

### City Selection

```text
City Button
    ↓
data-city
    ↓
Find matching city object
    ↓
Get latitude and longitude
    ↓
Request weather data
    ↓
Update the interface
    ↓
Save selected city
```

### Refresh

```text
Current City
    ↓
Request updated weather data
    ↓
Update the interface
```

The Refresh button only updates the currently selected city.

### Page Reload

```text
localStorage
    ↓
Saved city name
    ↓
Find matching city object
    ↓
Restore current city
    ↓
Restore active button
    ↓
Load weather
```

## Running Locally

The project does not require a build tool or package manager.

Because the application uses JavaScript ES Modules, it should be served through a local development server rather than opened directly with the `file://` protocol.

For example, the project can be run in Visual Studio Code using the **Live Server** extension.

## API Key

No API key is required for the current Open-Meteo integration.

## Deployment

The application can be deployed as a static website using services such as Netlify or GitHub Pages.

No build step is required. The project can be served directly from the repository root.

## Current Status

### Completed

- City selection
- Active city state
- Current weather requests
- Weather data rendering
- Weather-code descriptions
- Refresh functionality
- Selected-city persistence
- Selected-city restoration after reload
- Responsive interface
- Favicon and application icons

### Planned

- Theme switching
- Celsius/Fahrenheit unit switching
- Persistence of theme and unit preferences
- Additional UI improvements

## Attribution

Weather data is provided by [Open-Meteo](https://open-meteo.com/).

## License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Author

**Oleh Koliadiuk**
