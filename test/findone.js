var join = require('path').join;
var userPath = join(__dirname, 'fixtures', 'user.json');

describe('find', function() {
  it('loads the JSON file into memory', function(done) {
    jstore({ path: userPath }).findOne(function(err, user) {
      assert(!err, 'error on find');
      assert(user.get('id') === 1, 'user id does not match');
      done();
    });
  });

  it('accepts custom path', function(done) {
    jstore().findOne(userPath, function(err, user) {
      assert(!err, 'error on findOne');
      assert(user.get('id') === 1, 'user id does not match');
      done();
    });
  });

  it('returns an error if there is one', function(done) {
    jstore().findOne('invalid', function(err) {
      assert(err, 'expected error');
      done();
    });
  });
});
