var join = require('path').join;
var usersPath = join(__dirname, 'fixtures', 'users.json');

describe('find', function() {
  it('loads the JSON file into memory', function(done) {
    jstore({ path: usersPath }).find(function(err, users) {
      assert(!err, 'error on find');
      assert(users.at(0).get('id') === 1, 'user id does not match');
      assert(users.at(1).get('id') === 2, 'user id does not match');
      done();
    });
  });

  it('accepts custom path', function(done) {
    jstore().find(usersPath, function(err, users) {
      assert(!err, 'error on find');
      assert(users.at(0).get('id') === 1, 'user id does not match');
      assert(users.at(1).get('id') === 2, 'user id does not match');
      done();
    });
  });

  it('returns an error if there is one', function(done) {
    jstore().find('invalid', function(err) {
      assert(err, 'expected error');
      done();
    });
  });
});
