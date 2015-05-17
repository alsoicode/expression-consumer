# Expression Consumer

A ReSTful Node.js service written in [Restify](http://mcavage.me/node-restify/) that consumes an addition expression, evaluates it and reports the solution back to the producer.

## Requirements
 - [Node.js and npm](https://nodejs.org/)
 - [Grunt](http://gruntjs.com/) for running tests
 - [nodemon](https://github.com/remy/nodemon) (optional)

## Installation
 - Clone this repository, or download the source as a .zip archive
 - `cd` into the cloned directory or unzipped archive
 - install dependencies via npm: `$ npm install`
 - Create a `.env` file in the project root to set up your local Node environment variable with the following contents: `NODE_ENV=local`

## Configuration
The only option you may need to configure is the Restify server port, located in `settings/local.json`. By default this port is set to `4000`.

## Logging
To enable logging: `$ mkdir logs && touch logs/run.log`

## Running the server
 - via nodemon: `$ nodemon app.js`
 - via node: `$ node app.js`

With the default settings, the server will be running at: `localhost:4000`

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

***

## Usage
### Step 1:
Download, configure and start the [Expression-Producer](https://github.com/alsoicode/expression-producer) service.

### Step 2:
Start the Expression-Consumer service.

### See Results!
Open a browser, hit the [/consume](http://localhost:4000) endpoint and marvel at the wonders of the addition of random positive integers!

Alternatively, you can also use [Postman](https://www.getpostman.com/) to view the JSON result returned.

## Tests
Tests are written BDD-style with [Mocha](http://mochajs.org/) and [Supertest](https://github.com/visionmedia/supertest) and can be run using Grunt: `$ grunt test`

## Diagrams
UML diagrams for activity and sequence are located in the `./diagrams` directory:
 
 - expression-consumer-activity.html
 - expression-consumer-sequence.html

and are viewable via your web browser.