let SpecReporter = require('jasmine-spec-reporter').SpecReporter;


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //localhost:4444/wd/hub
    specs: ['calculator_spec.js'],
    capabilities: {
        browserName: 'chrome'
    },

//     onPrepare: function() {
//         var SpecReporter = require('jasmine-spec-reporter');
//         jasmine.getEnv.addReporter(new SpecReporter({displayStacktrace: 'all'}));
//     }
// }

onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }

  
}