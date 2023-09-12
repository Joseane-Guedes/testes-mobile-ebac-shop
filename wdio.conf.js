// const { join } = require('path')
// const allure = require('allure-commandline')


// exports.config = {
//     hostname: 'localhost',
//     port: 4723,
//     path: '/wd/hub',
//     user: "joseaneguedes34@gmail.com",
//     key: "Vidanova2023",

//     services: ['appium'],
//     // services: ['browserstack'],
//     specs: [
//         './test/specs/**/*.spec.js'
//     ],
//     framework: 'mocha',


//     capabilities: [{
//         "platformName": "Android",
//         "appium:platformVersion": "14",
//         "appium:deviceName": "Pixel_3a",
//         "appium:automationName": "UiAutomator2",
//         "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
// //        "appium:appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
//         'appium:newCommandTimeout': 10000


//         // 'app' : 'bs://8450f0ceb7140a7d8772c1ccdfb9d6c496e9a702',
//         // 'device' : 'Samsung Galaxy Note 20',
//         // 'os_version' : '10.0',
//         // 'project' : 'Meu primeiro projeto em Device Farm',
//         // 'build' : '1',
//         // 'name': 'teste_login'
//     }],
//     waitforTimeout: 20000,
//     mochaOpts: {
//         timeout: 300000
//     },
//     reporters: ['spec',
//         ['allure', {
//             outputDir: 'allure-results',
//             disableWebdriverStepsReporting: true,
//             disableWebdriverScreenshotsReporting: true,
//         }],
//     ],
//     onComplete: function () {
//         const reportError = new Error('Could not generate Allure report')
//         const generation = allure(['generate', 'allure-results', '--clean'])
//         return new Promise((resolve, reject) => {
//             const generationTimeout = setTimeout(
//                 () => reject(reportError),
//                 5000)

//             generation.on('exit', function (exitCode) {
//                 clearTimeout(generationTimeout)

//                 if (exitCode !== 0) {
//                     return reject(reportError)
//                 }

//                 console.log('Allure report successfully generated')
//                 resolve()
//             })
//         })
//     },
//     afterStep: function (test, scenario, { error, duration, passed }) {
//         if (error) {
//             driver.takeScreenshot()
//         }
//     }
// }

const { join } = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "14",
        "appium:deviceName": "Pixel_3a",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appium:appWaitActivity": 'MainActivity'
    }]
}