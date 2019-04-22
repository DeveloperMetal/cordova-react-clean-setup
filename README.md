# Bloomstack Companion App

This project is the cordova configuration to compile mobile applications for the Bloomstack Companion App.

The hosted "Apps" in the companion app are individual projects hosted on other repos. This repo combines those more generic components to create intallable mobile applications using Apache Cordova.

## Development

Since this project is mostly configuration only shim and platform specific code resides here.


## Building

Browser builds
```bash
yarn dev:browser
```

Electron builds
```bash
yarn dev:electron
```

More platforms to come as we are figuring out a build process to test on multiple physical devices.