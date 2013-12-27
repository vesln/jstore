/**
 * External dependencies.
 */

var assert = require('assert');

/**
 * Internal dependencies.
 */

var jstore = require('./');

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    formatter: 'hydro-dot',
    globals: {
      assert: assert,
      jstore: jstore
    },
    tests: ['test/*.js'],
    plugins: [
      'hydro-bdd',
      'hydro-file-suite'
    ]
  });
};
