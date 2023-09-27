# Getting Started with FMS UI Application

This project was bootstrapped with [Vite](https://vitejs.dev).

## Requirements

* Node 18.13.0 (with npm 8.19.3)
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Running the application

1. After cloning the repo, run `npm ci`. (Note: This should be used in most cases instead of `npm install` to utilize package-lock).
2. (optional) In the UI root, copy the file `.env.local.example` and rename to `.env.local`. Update the options in this file as required for local development.
3. Run `npm run server` and follow the interactive prompts to start the local server.
4. Run `npm start` to start the React application in development mode.\
5. Open the application in [http://localhost:5173](http://ew.localhost:5173)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Directory structure

Note: `section` is used as an alias for a level 1 bounded context

| Path                               | Description                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /src/components/                   | Contains all global components used in the application. These should be stateless, and not coupled to any particular section. Each component should contain: a PascalCase folder, and `*.jsx`, `*.styles.js`, and `*.spec.jsx` files (where `*` is the same name as the containing folder). |
| /src/config/                       | All configuration related objects.                                                                                                                                                                                                                                                          |
| /src/constants/                    | Hardcoded data that never changes, or maps to IDs used by the backend.                                                                                                                                                                                                                      |
| /src/hooks/                        | All React hooks. Each file should be prefixed with `use`.                                                                                                                                                                                                                                   |
| /src/modules/images               | Static image files.                                                                                                                                                                                                                                                                         |
| /src/modules/jest                 | Configuration and setup files for Jest.                                                                                                                                                                                                                                                     |
| /src/modules                      | Contains all specific code broken down by section folders. All code here is generally not reusable, and likely contains some kind of Redux state.                                                                                                                                           |
| /src/modules/_common              | Contains generic functionality not directly related to a level 1 bounded context, but is still unique and may contain Redux state. These modules are typically global, and used in many modules of the app.                                                                               |
| /src/modules/:section/*Routes.jsx | All routing and routing based logic for the specific section.                                                                                                                                                                                                                               |
| /src/modules/:section/pages       | All page components related to a specific section. These pages are generally a composition of global components.                                                                                                                                                                            |
| /src/modules/:section/state       | Redux slices for everything related to a specific section.                                                                                                                                                                                                                                  |  |
| /src/modules/tabs                 | Reusable tab views. Follows the same naming and structure conventions as the `src/components` folder.                                                                                                                                                                                       |
| /src/modules/theme                | Themes specific to the application.                                                                                                                                                                                                                                                         |
| /src/modules/utils                | Commonly reused helper functions. No components should live here.                                                                                                                                                                                                                           |
|                                    |

