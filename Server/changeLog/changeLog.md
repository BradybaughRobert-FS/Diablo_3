## V.0.0.1 [9-11-24]

### Changes Made
- Updated `server.js` to import the Express app from `./app` and use it in the HTTP server setup.
- Updated `index.js` in the `app` folder to set up a basic Express server with a `GET` route for the root path (`/`).
- Created `index.js` file inside the `app` folder.
- Created `app` folder inside the `server` folder for organizing application files.
- Updated `server.js` to include `require('dotenv').config()` for loading environment variables.
- Installed `express` and `dotenv` packages using npm.
- Created `.env` file with `PORT = 3000`.
- Updated `.gitignore` to include `.env` and `node_modules/`.

## V.0.0.1 [9-10-24]

### Changes Made
- Installed `nodemon` as a development dependency using `npm install nodemon -D`.
- Initialized project with `npm init -y` to create `package.json`.
- Added `changeLog.md` file inside the `changeLog` folder to document changes.
- Created `changeLog` folder inside the `server` folder.
- Added `server.js` file inside the `server` folder to establish it as a working directory.
- Created `client` and `server` folders.
