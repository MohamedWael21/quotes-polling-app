# Quotes Polling App

this package contains a server app use to fetch quotes from free API from RapiApi.  
The link for API: https://rapidapi.com/afilummer/api/thought-of-the-day/playground/apiendpoint_11f196d7-1f09-496a-b54d-7dfeff7e0740

Also contains cli tool use to fetch the quotes

# Setup

add the following inside **.env files**

- server:

```javascript
PORT=
INTERVAL=
API_KEY=
```

# How to test

you need to run the following commands after clone repo

```javascript
   cd server
   npm install
   npm start
   cd ../server
   npm install
   npm link
   poll-quotes
```
