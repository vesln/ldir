/**
 * External dependencies.
 */

var fs = require('fs');
var path = require('path');
var join = path.join;
var resolve = path.resolve;

/**
 * Load all JavaScript files in `path` recursively.
 *
 * @param {String} path
 * @api public
 */

function ldir(path) {
  path = resolve(path);
  var files = fs.readdirSync(path);

  files.forEach(function(file) {
    var full = join(path, file);
    if (isDirectory(full)) return ldir(full);
    if (isJs(file)) require(full);
  });
}

/**
 * Return whether `path` is a directory.
 *
 * @returns {Boolean}
 * @api private
 */

function isDirectory(path) {
  return fs.statSync(path).isDirectory();
}

/**
 * Return whether `file` has .js extension.
 *
 * @returns {String}
 * @api private
 */

function isJs(file) {
  return /\.js$/.test(file);
}

/**
 * Primary export.
 */

module.exports = ldir;
