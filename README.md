# Full Stack Project

- Create-react-app v2.0
- Typescript
- Nodejs w/ Express
- Graphql
- ESLint with Prettier

All React and front end related files are in the `src` folder.

All server related files are in the `server` folder.

All shared interface files are in the `src/interfaces` folder.

No new files should be added to the `public` folder.

# Getting Started

## Install dependencies

In the top level directory run:

`npm install`

This will install all dependencies for both frontend and server.

# Running for development

To run both front and back end in development mode, in the top level project directory run:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view the front end in the browser. The server can be accessed directly via [http://localhost:5000](http://localhost:5000).

The front and back end will reload if you make edits and any lint errors will display in the console.

## Running only the front end

In the top level directory run:

`npm run start-frontend`

to start only the React app with hot reloading.

## Running only the server

In the top level directory run:

`npm run start-server`

to start only the server with hot reloading.

# Running for production

In the top level directory run:

`npm run build`

This will build the project for deployment. Both frontend and server will be built in production mode (minification, tree-shaking, etc.) and relevant files output to the `./build` folder.

Once built/deployed, copy the relevant `.env` file to `./build` and run outside of the project directory using:

`node ./build/server/server.js`

or within the project directory:

`npm start`

to run the application in production.

# Other scripts

`npm test`

Currently this is disabled, but the script definition can be replaced with `react-scripts test` to launch the front end test runner in interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# GraphQL Playground

The GraphQL playground is for testing GraphQL queries. To use it first start the server either with `npm run dev` or `npm run start-server`.

The playground can then be accessed at [http://localhost:5000/playground](http://localhost:5000/playground).