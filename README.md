🚧 🚧 🚧 **UNDER CONSTRUCTION** 🚧 🚧 🚧

## New Build Template for LaRepubblica

The build template of La Repubblica is awfulnot good, so I made a new one!

The app is scraping data from 'repubblica.it' homepage and constructs a new page with better design. Only free contet is available. Navigation menu links lead to the original website.

## Technology Used

# React
- App construction

# Redux
- State management

# Express.js
- Server for data fetching

# Cheerio and CORS
- HTML parsing and handling cross-origin requests

# Tailwind
- Styling and cross browser adaptation


Deployment (only) static components work, for data fetching run the server:
[https://repubblica-build.vercel.app/](https://repubblica-build.vercel.app/)

## Installation Instructions

Follow these steps to set up and run the project locally.

### 1. Clone the repository

Open terminal and clone the repository

git clone git@github.com:EllySmith/repubblica-build.git

### 2. Run the Server

First, start the backend server by running the following command:

node server.js

### 3. Run the App

Now start the web app 

npm start