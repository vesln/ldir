var assert = require('assert');
var ldir = require('../');

t('loads all JavaScript files by default', function() {
  var files = ldir('test/fixtures');

  assert(global.a === 'loaded', 'a was not loaded');
  assert(files.a === 'a', 'a was not exported');

  assert(global.b === 'loaded', 'b was not exported');
  assert(files.sub.b === 'b', 'b was not loaded');
});

t('loads files with other extensions if specified', function() {
  var files = ldir('test/fixtures', { ext: '.json' });

  assert(files.json.test === true, 'JSON file was not loaded');
  assert(!files.a, 'JS file was loaded');
});
