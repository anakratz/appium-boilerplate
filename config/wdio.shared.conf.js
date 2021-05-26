const { join } = require('path');
exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
       runner: 'local',
 
    exclude: [
        // 'path/to/excluded/files'
    ],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register'],
     //  helpers: [require.resolve('@babel/register')]
    },

    sync: true,
    logLevel: 'trace', 
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: [
        'spec', [
            'allure', {
                outputDir: './reports/allure/allure-results'
            }
        ], [
            'json', {
                outputDir: './reports/json/json-results'
            }
        ]
    ],


     
    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                    // Auto download ChromeDriver
                    relaxedSecurity: true,
                    // chromedriverAutodownload: true,
                    // For more arguments see
                    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
    ],
    port: 4723,

    
};
