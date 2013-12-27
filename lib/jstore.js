/**
 * Internal dependencies.
 */

var storage = require('./jstore/storage');
var Collection = require('./jstore/collection');

/**
 * Jstore constructor.
 *
 * Options:
 *
 *  - path     - Path to file to read from
 *  - storage  - Storage adapter
 *
 * @param {Object} options
 * @constructor
 */

function Jstore(opts) {
  if (!(this instanceof Jstore)) return new Jstore(opts);
  opts = opts || {};
  this.path = opts.path;
  this.storage = opts.storage || storage;
}

/**
 * Find all records in the given `path`.
 *
 * @param {String} path (optional)
 * @param {Function} fn
 * @api public
 */

Jstore.prototype.find = function(path, fn) {
  if (arguments.length === 1) {
    fn = path;
    path = this.path;
  }

  this.storage.read(path, function(err, data) {
    if (err) return fn(err);
    fn(null, new Collection(data));
  });
};

/**
 * Primary export.
 */

module.exports = Jstore;
