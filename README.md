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

You'll need MacOS due to xcode dependency, to install xcode and xcode command tools. After you install xcode from the appstore (and open it once! very important for fetching updated packages) run:

```bash
xcode-select --install
```

And wait for the installation to complete
Then install deployment scripts for npm:

```bash
sudo npm install -g ios-deploy
```

For more info about ios setup see the [cordova ios guide](https://cordova.apache.org/docs/en/5.1.1/guide/platforms/ios/index.html)

### Android 

Install Android SDK specifically Android Studio which should install the latest JDK for you if not install it from the link below. 

You can install jdk yourself from [here.](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) As of writing JDK 8 is the version Cordova was the targetJA

You'll also need to [install gradle for your platform](https://gradle.org/install/#prerequisites)

Then make sure you have the following packages installed in Android Studio(Tools > SDK Manager) or in the sdkmanager cli tool:

1) Android Platform sdk for the target you want
2) Android SDK build-tools >= 19.1.0
3) Android support repo found under SDK tools tab

Then finally make sure you have all environment variables setup:

1) JAVA_HOME points to your copy of JDK path.
2) ANDROID_HOME points to the Android SDK installation.
3) Add ```tools```, ```tools/bin```, and ```platform-tools``` android sdk paths to your PATH.
4) During the gradle installation you should have appended gradle to your path as well.

Depending on the platform you develop on this can be done in a few ways:

#### Windows

Search > Envirmental Variables and just add them to System Variables and append to the PATH variable

You'll need to set JAVA_HOME, ANDROID_HOME and append to the PATH variable as stated above

#### OSX and Linux

You can edit your .bash_profile file and export and append your PATH your varialble/s:

```bash
export JAVA_HOME=/path/to/jdk
export ANDROID_HOME=/path/to/android/sdk
export PATH=${PATH}:/${ANDROID_HOME}/tools:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/platform-tools
```

Then reload your bash profile

```bash
$ source ~/.bash_profile
```




### Desktop

TODO

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

