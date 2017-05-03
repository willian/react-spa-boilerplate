# Installation

## Step 1

Install [Node.js](http://nodejs.org), [npm](https://www.npmjs.com) and [yarn](http://yarnpkg.com).
You can find instructions about Node.js and npm installation here: https://docs.npmjs.com/getting-started/installing-node

## Step 2

Clone the repository to your local machine

```
git clone git@github.com:willian/react-spa-boilerplate.git
cd react-spa-boilerplate
```

## Step 3

With node, npm and yarn installed, now is time install the project dependencies:

```
cd react-spa-boilerplate
yarn
```

# Running the application locally

## Unix (macOS and Linux)

All you need to do is:

```
yarn start
```

You can also set a different host by setting the `APP_HOST` environment variable:

```
APP_HOST=dev.stabe.be yarn start
```

**NOTE: You can add the `APP_HOST` variable to the `.env` file and run `yarn start`.**

## Windows

Because Windows doesn't recognize `0.0.0.0` as a valid host, you'll need to set the `APP_HOST` environment variable to make the application running.

### Git bash (or any other bash for Windows)

```
APP_HOST=localhost yarn start
```

### cmd.exe

```
SET APP_HOST=localhost&& yarn start
```

### PowerShell

```
$env:APP_HOST='localhost'; yarn start
```

**NOTE: You can add the `APP_HOST` variable to the `.env` file and run `yarn start`.**

# Configuring the application

Most of the application configuration is done by setting environment variables.
The easiest way to do it is by creating a local `.env` file at the root
directory and add the variables there. For example:

```
NODE_ENV=development
APP_HOST=localhost
# ASSET_HOST=
# PUBLIC_URL=
```
