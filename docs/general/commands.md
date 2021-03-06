# Command Line Commands

## Development

```Shell
yarn run start
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```Shell
yarn start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

### Production

```Shell
yarn run start:production
```

 * Runs tests (see `yarn test`)
 * Builds your app (see `yarn run build`)
 * Starts the production server (see `yarn run start:prod`)

The app is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`yarn start -- --host my-local-hostname --port 5000`

## Building

```Shell
yarn run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

## Testing

See the [testing documentation](../testing/README.md) for detailed information
about our testing setup!

## Unit testing

```Shell
yarn test
```

Tests your application with the unit tests specified in the `**/tests/*.js` files
throughout the application.

### Watching

```Shell
yarn run test:watch
```

Watches changes to your application and re-runs tests whenever a file changes.

### Remote testing

```Shell
yarn run start:tunnel
```
Starts the development server and tunnels it with `ngrok`, making the website
available on the entire world. Useful for testing on different devices in different locations!

### Dependency size test

```Shell
yarn run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
yarn run lint
```

Lints your JavaScript.
