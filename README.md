# Bloomstack Companion App

This project is the cordova configuration to compile mobile applications for the Bloomstack Companion App.

The hosted "Apps" in the companion app are individual projects hosted on other repos. This repo combines those more generic components to create intallable mobile applications using Apache Cordova.

Since this project is mostly configuration only shim and platform specific code resides here.

## Basic Requirements

At the least you'll need some basic software to get this going and depending on what you are building you'll have to build and deploy from specific OSs like macos for IOS.

You'll need:

- [A fairly recent Nodejs version for your OS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)

### Cordova

On macos and linux you'll need to install most global packages as sudo.

To install:

```bash
sudo npm install -g cordova
```

### Post cordova installation

After you've pulled this repo run yarn to fetch all project requirements:

```bash
yarn
```

If you intend to run one or all platform builds on one machine its a good idea to test requirements. To do that run the following after pulling this repo and running yarn:

```bash
cordova requirements
```

## Platforms Requirements

### IOS

You'll need to install xcode and xcode command tools. After you install xcode from the appstore (and open it once! very important for fetching updated packages) run:

```bash
xcode-select --install
```

And wait for the installation to complete
Then install deployment scripts for npm:

```bash
sudo npm install -g ios-deploy
```

For more info about ios setup see the [cordova ios guide](https://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html)

#### Building

To start a simulator for any specific version of ios first list the available targets:

```bash
cordova run ios --list
```

The output will list both physical and available simulated devices. To start a specific device(sim or not) run:

```bash
yarn dev:ios --target="<ios version from list>"
```

Ex:

```bash
yarn dev:ios --target="iPhone-7"
```

Or just run the latest simulator available

```bash
yarn dev:ios
```

The --target parameter is passed to the cordova cli tool. Therefore, you can append any cordova parameters you like.

The dev:ios script does two things. Compiles the companion subproject and outputs its packaged files into /www/ for cordova and runs the cordova compiler on these new files. After compilation is done the simulator is started.

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