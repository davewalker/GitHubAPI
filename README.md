This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
ReactJS application for demo purposes. After checking out the project from GitHub, 2 simple commands should get the app running locally:

    > npm install
    > npm start

There will be additional environment variables missing from the initial install. These can be found in the `.env.example` file and should be copied to a `.env` file, and filled in as is appropriate

## Environment variables
Environment variables will be used to store shared config variables (API keys, URLs & any other sensitive credentials). This means source code should contain **none of this information**.

This repo contains a `.env.example` with guidelines on naming these variables. They should be prefixed with `REACT_APP_` so we know this refers to something specifically in this application.

    REACT_APP_API_URL=https://api.url/endpoint

The `.env.example` should only be required locally, and should be renamed to `.env` when checking out the repo, with the appropriate variables added before building the app.

Any environment running in Netlify can have it's environment variables configured via their GUI. This should be taken lightly with and the knowledge that removing **any** variables could hinder the application.

## Deployment [![Netlify Status](https://api.netlify.com/api/v1/badges/155175cb-79fe-4754-912c-9a793deeead0/deploy-status)](https://app.netlify.com/sites/davewalker-githubapi/deploys)

Deployments are managed and hosted through Netlify.com. Any changes to the master branch will trigger unit tests to be executed, and a successful test result will update the production environment.