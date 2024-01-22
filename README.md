# Config Cordova & Run app, release app

_Reference links_

1. Basic concepts: <https://viblo.asia/p/cordova-nhung-khai-niem-co-ban-yMnKMgRgl7P>
2. Create keystore: <https://hackernoon.com/how-to-sign-android-apks-with-apache-cordova-a-brief-guide-uj13339k>
3. Answer latest of this to release apk file instead of aab file: <https://stackoverflow.com/questions/71880645/cordova-generate-a-release-apk-file-instead-of-an-aab-file>

# Detailed steps

- Step 1: Intstall cordova in global with syntax
  ```npm install -g cordova```
- Step 2: Create new project with command `cordova create <name of your apps>`. If you want to create app in current **EMPTY folder** you can type `cordova create .` Enter
- Step 3: Add platform to app `cordova add platform <platform name>`
  Platform name is on of both `android` or `ios`
- Step 4: Run app with command: `yarn start` or `cordova serve`
- Step 5: Build, release app
  - Build: `cordova build <platform name>` or `yarn build-<platform name>`
  - Release apk: `cordova build android --release --buildConfig=build.json -- -- --packageType=apk`
  - Release aab: `cordova build android --release --buildConfig=build.json`

**Note**: Before release let generate android keystore to secure app and data; and create `build.json` file.

Syntax: `keytool -genkey -v -keystore <your app name>.keystore -alias <alias app name>alias -validity 10000 -keyalg RSA`

Meaning of the command line above:

- -keyalg RSA: This specifies the RSA algorithm for key generation. RSA is a widely used and secure algorithm for public key cryptography.
- Other key algorithms can be used if desired, such as **DSA** or **EC**.

**Create `build.json` file**

Create file with template above:

```{
    "android": {
        "debug": {
            "keystore": "./myapp.keystore",
            "storePassword": <pass>,
            "alias": <app alias name>,
            "password" : <pass>,
            "keystoreType": "jks"
        },
        "release": {
            "keystore": <path of keystore file>,
            "storePassword": <pass>,
            "alias": <app alias name>,
            "password" : <pass>,
            "keystoreType": "jks"
        }
    }
}
```
