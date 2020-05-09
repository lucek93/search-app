# search-app

## Description
This application allows to search content within iTunes Store.

## Dependencies 
Install dependencies 
- [Node](https://nodejs.org/en/)
- npm

## Installation

```
cd ./search-app
npm install
```

## Development

```npm run start ```- runs the development enviroment on localhost ``` http://localhost:8080/ ```

```npm run build ```- builds a production version

## package.json
```
{
  "name": "itunesapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "babel-loader": "^8.1.0",
    "core-js": "^3.6.5",
    "html-webpack-plugin": "^4.3.0",
    "install": "^0.13.0",
    "npm": "^6.14.4",
    "regenerator-runtime": "^0.13.5",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0"
  }
}
```
