# Project : Appium in Javascript

```
기존 CYPRESS를 통해 웹 자동화를 진행한 경험을 버리지 않고 유지하기 위해 Javascript를 활용하여 진행하려고 한다.

```

## 설치

1. 초기화 : npm -init -y
2. 다운로드 받기..아래 링크

| 구분           | 링크                                                                                             | 설명             |
| -------------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| JDK 8          | [오라클 다운로드](https://www.oracle.com/kr/java/technologies/javase/javase-jdk8-downloads.html) | 회원 가입 필요   |
| nodeJS         | https://nodejs.org/ko/                                                                           | 다운로드 후 설치 |
| android studio | https://developer.android.com/studio                                                             | 다운로드 후 설치 |
| appium         | https://appium.io/downloads.html                                                                 | 다운로드 후 설치 |

---

### Sample APK : https://github.com/appium/appium/tree/master/sample-code/apps

---

### Driver

- The [XCUITest Driver](https://appium.io/docs/en/drivers/ios-xcuitest/index.html) for iOS and tvOS apps
- The [Espresso Driver](https://appium.io/docs/en/drivers/android-espresso/index.html) (for Android apps)
- The [UiAutomator2 Driver](https://appium.io/docs/en/drivers/android-uiautomator2/index.html) (for Android apps)
- The [Windows Driver](https://appium.io/docs/en/drivers/windows/index.html) (for Windows Desktop apps)
- The [Mac Driver](https://appium.io/docs/en/drivers/mac/index.html) (for Mac Desktop apps)

## WebDriverIO

1. 설치 : npm i @wdio/cli
2. 환경 : ./node_modules/ .bin/wdio config or npx wdio config

- located : Local
- framework : mocha
- compiler : No
- specs located : ./test/specs/\*_/_.js
- test setup : selenium-standalone
- base url : http:localhost

## Appium + wdio

- npm install @wdio/appium-service --save-dev

## 실행

- npx wdio run wdio.conf.js : 모바일 실행 (Android)
- npx wdio run pc.conf.js : 웹 실행 (chrome)
