Package.describe({
  name: 'kiraknowsbest:json-interpreter',
  version: '1.0.8',
  summary: 'autoform input: JSON String => JSON Object',
  git: 'https://github.com/kiraknowsbest/json-interpreter',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use([
    'templating',
    'ecmascript',
    'aldeed:autoform@5.3.0',
  ], 'client');

  api.addFiles([
    'template.html',
    'template.js',
  ], 'client');
});
