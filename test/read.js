var join = require('path').join;

it('loads and returns the given JSON file', function(done) {
  jstore.read(join(__dirname, 'fixtures', 'users.json'), function(err, users) {
    assert(!err, 'error on find');
    assert(users[0][0].id === 1, 'user id does not match');
    assert(users[0][1].id === 2, 'user id does not match');
    done();
  });
});

it('returns empty error and empty records if nothing was found', function(done) {
  jstore.read('invalid', function(err, records) {
    assert(!err, 'unexpected error');
    assert(!records, 'unexpected records');
    done();
  });
});

it('accepts glob patterns', function(done) {
  jstore.read(join(__dirname, 'fixtures', 'glob', '.*.json'), function(err, users) {
    assert(!err, 'unexpected error');
    assert(users[0].id === 1, 'user id does not match');
    assert(users[1].id === 2, 'user id does not match');
    done();
  });
});
