## V.0.0.1 [9-14-24]

### Changes Made
- Added `const router = require("./routes");` to import the router in `app/index.js`.
- Reviewed and added `app.use('/api', router);` to correctly mount the API routes, resolving all issues with routing in the application.

## V.0.0.1 [9-12-24]

### Changes Made
- Added `index.js` inside the `routes` folder to set up basic routing for `GET` and `POST` requests.
- Created `routes` folder inside the `app` folder.

## V.0.0.1 [9-11-24]

### Changes Made
- Created `index.js` file inside the `app` folder.
- Updated `index.js` in the `app` folder to set up a basic Express server with a `GET` route for the root path (`/`).
- Created `app` folder inside the `server` folder for organizing application files.
- Updated `server.js` to import the Express app from `./app` and use it in the HTTP server setup.
- Updated `server.js` to include `require('dotenv').config()` for loading environment variables.
- Installed `express` and `dotenv` packages using npm.
- Created `.env` file with `PORT = 3000`.
- Updated `.gitignore` to include `.env` and `node_modules/`.

## V.0.0.1 [9-10-24]

### Changes Made
- Added `server.js` file inside the `server` folder to establish it as a working directory.
- Installed `nodemon` as a development dependency using `npm install nodemon -D`.
- Initialized project with `npm init -y` to create `package.json`.
- Added `changeLog.md` file inside the `changeLog` folder to document changes.
- Created `changeLog` folder inside the `server` folder.
- Created `client` and `server` folders.
