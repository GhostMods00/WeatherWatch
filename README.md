# WeatherWatch

WeatherWatch is a web application that allows users to check the current weather and 5-day forecast for multiple cities. Built using Node.js, Express, and TypeScript on the backend, and powered by the OpenWeather API, WeatherWatch provides a simple, easy-to-use interface for travelers and users who need quick weather updates.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

- **City Search**: Search for any city to get current weather information.

- **Weather Data**: Displays current temperature, humidity, wind speed, and 5-day forecast.
- **Search History**: Saves previously searched cities and allows users to quickly re-access weather information.
- **Responsive Design**: Works on desktop and mobile browsers.


## Tech Stack

 **Frontend**: HTML, CSS, JavaScript

 **Backend**: Node.js, Express, TypeScript

 **API**: [OpenWeather API](https://openweathermap.org/api)

 **UUID**: For generating unique IDs for search history
## Installation

Install my-project with npm

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node package manager)

### Steps

#### 1. Clone the Repository:
   ```bash
git clone https://github.com/your-username/WeatherWatch.git 
```
#### 2. Navigate to the project directory:
```bash
cd WeatherWatch
```

#### 3. Install the required dependencies:
```bash
npm install
```

#### 4. Set Up Environment Variables:
 Create a `.env` file in the server directory and add your OpenWeather API key:
```bash
OPENWEATHERMAP_API_KEY=your_openweather_api_key
PORT=3001  # optional, defaults to 3001
```
#### 5. Build the Project:
Compile TypeScript files:
```bash
 npm run build

```
#### 6. Run the Server:
```bash
 npm start

```
The server should now be running at http://localhost:3001.

## Usage

- **Open the Application**: Go to http://localhost:3001 in your browser.

- **Search for a City**: Enter a city name to view current weather data and a 5-day forecast.
- **View Search History**: Previously searched cities are saved for quick access.


## API Endpoints

#### Weather Data

- **POST** `/api/weather`
  - **Description**: Fetch weather data for a given city and save it to search history.
  - **Body Parameters**:
    ```json
    {
      "city": "CityName"
    }
    ```
  - **Response**: Weather data object.

- **GET** `/api/weather/history`
  - **Description**: Retrieve search history.
  - **Response**: Array of cities previously searched.

- **DELETE** `/api/weather/history/:id`
  - **Description**: Remove a city from search history by ID.
  - **Parameters**:
    - `id` (string): Unique identifier of the city to remove from search history.

## Environment Variables

| Variable                | Description                               |
|-------------------------|-------------------------------------------|
| `OPENWEATHERMAP_API_KEY` | Your API key for OpenWeather API         |
| `PORT`                  | Port on which the server will run         |

## Deployment


WeatherWatch is currently deployed at [www.]

However WeatherWatch can be deployed on any platform that supports Node.js. Here’s a quick guide for deploying on Render:
-  **Push to GitHub**: Ensure all changes are committed and pushed.

- **Create a New Web Service on Render**:
   - Connect your GitHub repository.
   - Set the environment variables in Render's dashboard.
- **Deploy**: Render will automatically build and deploy your application.



## Contributing

Contributions are always welcome!

Please fork the repository, create a branch, and submit a pull request with any improvements or bug fixes.


## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Support

If you have any questions or need further assistance, feel free to reach out:




## 🔗 Links
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://gmail.com/westendcrew1982@gmail.com)
[![Protonmain](https://img.shields.io/badge/proton%20mail-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=white)](https://protonmail.com/westendcrew1982@protonmail.com)

[![Ghost](https://img.shields.io/badge/Ghost-000?style=for-the-badge&logo=ghost&logoColor=yellow)](https://waleedzaryab.com)


