# :rocket: Introduction

The exercise is to create a React Native mobile application using Typescript.

The purpose of the app is to display the current weather for a given location and provide a 5-day forecast. This app retrieves the data from an open source weather API and display it in a visually appealing and user-friendly manner.

# :triangular_ruler: Libraries

The below libraries are used in this react native application.

- Expo
- Zustand (global app state management)
- expo-location (getting the user's location)
- axios ( api call )
- @tanstack/react-query ( easy to manage api calls )
- react-native-community/netinfo ( getting the network status )
- @react-navigation ( navigation for multiple screens )

# :building_construction: Building & Running

Add below instructions on how to build and run your app on a fresh clone of the repo:

Install node dependencies

```yarn
yarn install (or npm run install)
```

Update the `.env` file, This app uses openweathermap api.
```
EXPO_PUBLIC_WEATHER_API_URL=https://api.openweathermap.org
EXPO_PUBLIC_WEATHER_API_KEY=xxxxxxx
```
Run the expo cli

```
npm run start
```

And follow the instruction on the terminal


