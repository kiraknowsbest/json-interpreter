Package.describe({
  name: 'kiraknowsbest:json-interpreter',
  version: '0.0.1',
  summary: 'an autoform element that takes a JSON object within a text editor and outputs the JSON object representation',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('json-interpreter.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kiraknowsbest:json-interpreter');
  api.mainModule('json-interpreter-tests.js');
});
