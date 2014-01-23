var assert = require('assert');
var ldir = require('../');

t('loads all JavaScript files', function() {
  ldir('test/fixtures');

  assert(global.a === 'loaded', 'a was not loaded');
  assert(global.b === 'loaded', 'b was not loaded');
});
