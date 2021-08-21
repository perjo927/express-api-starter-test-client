# Express API Starter Test Client

Based on [react & webpack5 starter kit](https://github.com/perjo927/react-webpack5-starter).

A test client for [https://github.com/perjo927/express-api-starter](https://github.com/perjo927/express-api-starter).

## Pre-requisites for Development

- Make sure to have [Node.js](https://nodejs.org/en/) and [nvm](https://github.com/nvm-sh/nvm) installed.
- Create a `.env` file in the root folder.

  - Populate it with the necessary process variables, like so:

    ```
    NODE_ENV=development
    ```

## User Flow

- User signs in
  - User gets access token from signing in
  - The app can now access protected API routes
  - The app tests a protected route


## Install

`$ git clone https://github.com/perjo927/express-api-starter-test-client`

`$ cd perjo927/express-api-starter-test-client:`

`$ nvm use`

`$ npm ci`

## Development Server

The Express API Starter needs to be running first. Instructions can be found separately in that code repository.

`$ npm run start`

## Test

### Single Run

`$ npm run test`

### Watch

`$ npm run test:watch`

## Author

Per Jonsson
