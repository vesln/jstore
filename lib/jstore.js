/**
 * Core dependencies.
 */

var fs = require('fs');

/**
 * External dependencies.
 */

var glob = require('glob');

/**
 * Read `path` and `JSON.parse` its content.
 * Path could be a glob pattern.
 *
 * @param {String} path
 * @param {Function} fn
 * @api public
 */

exports.read = function(path, fn) {
  glob(path, { dot: true }, function(err, files) {
    if (err) return fn(err);
    if (files.length === 0) return fn();

    var len = files.length;
    var data = [];
    var bail = false;

    files.forEach(function(file) {
      read(file, function(err, item) {
        if (bail) return;
        if (err) {
          bail = true;
          return fn(err);
        }

        data.push(item);

        if (--len === 0) return fn(null, data);
      });
    });
  });
};

/**
 * Write given `data` to `path`.
 *
 * @param {String} path
 * @param {Mixed} data
 * @param {Function} fn
 * @api public
 */

exports.write = function(path, data, fn) {
  try {
    data = JSON.stringify(data);
  } catch (err) {
    return fn(err);
  }

  fs.writeFile(path, data, 'utf8', fn);
};

/**
 * Destroy given `path`.
 *
 * @param {Function} fn
 * @api public
 */

exports.unlink = function(path, fn) {
  fs.unlink(path, fn);
};

/**
 * Read `file` and parse its content.
 *
 * @param {String} file
 * @param {Function} fn
 * @api private
 */

function read(file, fn) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) return fn(err);

    try {
      data = JSON.parse(data);
    } catch (err) {
      return fn(err);
    }

    fn(null, data);
  });
}
