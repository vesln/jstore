/**
 * Internal dependencies.
 */

var Model = require('./jstore/model');
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
  if (!fn) {
    fn = path;
    path = this.path;
  }
  this.read(path, Collection, fn);
};

/**
 * Find one record in the given `path`.
 *
 * @param {String} path (optional)
 * @param {Function} fn
 * @api public
 */

Jstore.prototype.findOne = function(path, fn) {
  if (!fn) {
    fn = path;
    path = this.path;
  }
  this.read(path, Model, fn);
};

/**
 * Read from the storage and instantiate `Klass`
 * with the returner results.
 *
 * @param {String} path
 * @param {Function} constructor
 * @param {Function} fn
 * @api private
 */

Jstore.prototype.read = function(path, Klass, fn) {
  this.storage.read(path, function(err, data) {
    if (err) return fn(err);
    fn(null, new Klass(data));
  });
};

/**
 * Primary export.
 */

module.exports = Jstore;
