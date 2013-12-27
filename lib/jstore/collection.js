/**
 * Internal dependencies.
 */

var Model = require('./model');

/**
 * Collection.
 *
 * @param {Array} array of objects
 * @constructor
 */

function Collection(objs) {
  this.models = (objs || []).map(function(data) {
    return new Model(data);
  });
}

/**
 * Return model at `index`.
 *
 * @returns {Model}
 * @api public
 */

Collection.prototype.at = function(index) {
  return this.models[index];
};

/**
 * Primary export.
 */

module.exports = Collection;
