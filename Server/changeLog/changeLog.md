## v.0.0.1 [9-21-24]

### Changes Made
- Added `Morgan` to `app/index.js`.
- Updated the `createCharacter` function in `charCtrl.js` to log incoming data in a readable format.
- Implemented pagination for the `getAllCharacters` function to handle character retrieval.
- Improved error handling for `updateCharacter` and `patchCharacter` functions to include validation for required fields.
- Organized code in controller files for better readability and structure.

## v.0.0.1 [9-15-24]

### Changes Made
- Removed `experience` field from the `Characters.js` schema as it is not needed.
- Added debugging step: `const data = req.body; console.log("data >>>", data);` in `createCharacter` function.
- Defined `characterSchema` for the Diablo 3 character model with fields:
  - `name` (optional)
  - `classType` (required, based on Diablo 3 classes)
  - `level` (required)
  - `createdDate` (defaults to current date).
- Created `Characters.js` inside the `models` folder.
- Created `models` folder inside the `app` folder.
- Updated `.env` file with:
  - `PORT = 5001`
  - `MONGODB_URI=mongodb://127.0.0.1:27017/Diablo_3`.
- Updated `server.js` to:
  - Import and call `connectDB` from `./app/db/config` to connect to MongoDB.
  - Ensure proper handling of database connection before starting the server.
- Created `config.js` inside the `db` folder to handle MongoDB connection:
  - Defined `connectDB` function using Mongoose to connect to the database.
  - Removed deprecated Mongoose options (`useUnifiedTopology`, `useNewUrlParser`).
  - Included error handling for connection failures.
- Installed `mongoose` using npm for MongoDB integration.

## v.0.0.1 [9-14-24]

### Changes Made
- Updated `app/index.js` to:
  - Correctly use `/api/v1` as the base path for route handling with `routeHandler`.
  - Simplify and clarify the root route response message.
- Updated `routes/index.js` to handle `GET` requests with a success message dynamically indicating the HTTP method used.
- Added `const router = require("./routes");` to import the router in `app/index.js`.
- Reviewed and added `app.use('/api', router);` to correctly mount the API routes.

## v.0.0.1 [9-12-24]

### Changes Made
- Added `index.js` inside the `routes` folder to set up basic routing for `GET` and `POST` requests.
- Created `routes` folder inside the `app` folder.

## v.0.0.1 [9-11-24]

### Changes Made
- Created `index.js` file inside the `app` folder.
- Updated `index.js` in the `app` folder to set up a basic Express server with a `GET` route for the root path (`/`).
- Created `app` folder inside the `server` folder for organizing application files.
- Updated `server.js` to import the Express app from `./app` and use it in the HTTP server setup.
- Updated `server.js` to include `require('dotenv').config()` for loading environment variables.
- Installed `express` and `dotenv` packages using npm.
- Created `.env` file with `PORT = 3000`.
- Updated `.gitignore` to include `.env` and `node_modules/`.

## v.0.0.1 [9-10-24]

### Changes Made
- Added `server.js` file inside the `server` folder to establish it as a working directory for the server.
