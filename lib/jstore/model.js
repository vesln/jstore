/**
 * Model.
 *
 * @param {Object} attributes
 * @constructor
 */

function Model(attrs) {
  this.attrs = attrs;
}

/**
 * Attribute getter.
 *
 * @param {String} key
 * @returns {Mixed}
 * @api public
 */

Model.prototype.get = function(key) {
  return this.attrs[key];
};

/**
 * Primary export.
 */

module.exports = Model;
