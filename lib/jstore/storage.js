/**
 * Core dependencies.
 */

var fs = require('fs');

/**
 * Read `path` and `JSON.parse` it.
 *
 * @param {String} path
 * @param {Function} fn
 * @api public
 */

exports.read = function(path, fn) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) return fn(err);

    try {
      data = JSON.parse(data);
    } catch (err) {
      return fn(err);
    }

    fn(null, data);
  });
};
