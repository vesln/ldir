/**
 * External dependencies.
 */

var fs = require('fs');
var path = require('path');
var ext = path.extname;
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
  var ret = {};

  files.forEach(function(file) {
    var full = join(path, file);
    var name = stripExt(file);

    if (isDirectory(full)) {
      return ret[name] = ldir(full);
    } else if (isJs(file)) {
      ret[name] = require(full);
    }
  });

  return ret;
}

/**
 * Strip extension.
 *
 * @param {String} file
 * @api private
 */

function stripExt(file) {
  return file.replace(new RegExp(ext(file) + '$'), '');
}

/**
 * Return whether `path` is a directory.
 *
 * @returns {Boolean}
 * @api private
 */

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
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
