# Expression Consumer

A ReSTful Node.js service written in Restify that consumes an addition expression, evaluates it and reports the solution back to the producer.

## Requirements
 - [Node.js and npm](https://nodejs.org/)
 - [Grunt](http://gruntjs.com/) for running tests
 - [nodemon](https://github.com/remy/nodemon) (optional)

## Installation
 - Clone this repository, or download the source as a .zip archive
 - `cd` into the cloned directory or unzipped archive
 - install dependencies via npm: `$ npm install`
 - Create a `.env` file in the project root to set up your local Node environment variable with the following contents: `NODE_ENV=local`

## Running the server
 - via nodemon: `$ nodemon app.js`
 - via node: `$ node app.js`

## Endpoints

### GET: /heartbeat
Simple healthcheck for the service.

***

### GET: /consume
Endpoint for consuming an addition expression and reporting the solution back to the producer.

##### Required Parameters
 - None

##### Returns
 - Status Code: 200
 - Response: `{"solution-recorded": true, "expression": "25+65=", "solution": 90}`
 - Content-Type: JSON

## Tests

Tests are written BDD-style with [Mocha](http://mochajs.org/) and [Supertest](https://github.com/visionmedia/supertest) and can be run using Grunt: `$ grunt test`