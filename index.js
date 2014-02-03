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
 * Options:
 *
 * `ext`: the extension of the files that should be loaded, default: .js
 *
 * @param {String} path
 * @api public
 */

function ldir(path, opts) {
  opts = opts || { ext: '.js' };
  path = resolve(path);

  var files = fs.readdirSync(path);
  var ret = {};

  files.forEach(function(file) {
    var full = join(path, file);
    var name = stripExt(file);

    if (isDirectory(full)) {
      return ret[name] = ldir(full, opts);
    } else if (isLoadable(file, opts.ext)) {
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
 * Return whether `file` can be loaded.
 *
 * @param {String} filename
 * @param {String} extension
 * @returns {String}
 * @api private
 */

function isLoadable(file, ext) {
  return new RegExp(ext + '$').test(file);
}

/**
 * Primary export.
 */

module.exports = ldir;
