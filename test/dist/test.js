(function() {
  describe('AJAX ::', function() {
    describe('Parrot URL object', function() {
      it('ajax with default options', function(done) {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two'
        });
        return parrot.ajax(parrot.url.jsontest(), function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      return it('ajax with custom options', function(done) {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two',
          method: 'no_exist'
        });
        return parrot.ajax(parrot.url.jsontest({
          method: 'get'
        }), function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
    });
    describe('Parrot URL object (alternative method)', function() {
      it('ajax with default options', function(done) {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two'
        });
        return parrot.ajax('jsontest', function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      return it('ajax with custom settings', function(done) {
        parrot.endpoint.add({
          name: 'testing',
          url: 'http://echo.jsontest.com'
        }).set('testing');
        parrot.url.add({
          name: 'jsontest',
          path: 'key/value/one/two',
          method: 'no_exist'
        });
        return parrot.ajax('jsontest', {
          method: 'get'
        }, function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
    });
    return describe('Simple URL', function() {
      it('only with url (included the path inside)', function(done) {
        var request;
        request = {
          url: 'http://echo.jsontest.com/key/value/one/two',
          method: 'GET'
        };
        return parrot.ajax(request, function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      it('with url and path', function(done) {
        var request;
        request = {
          url: 'http://echo.jsontest.com/',
          path: 'key/value/three/four',
          method: 'GET'
        };
        return parrot.ajax(request, function(err, result) {
          result.key.should.eql('value');
          return done();
        });
      });
      it('alternative method', function(done) {
        return parrot.ajax('http://echo.jsontest.com/key/value/one/two', function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
      return it('alternative method with options', function(done) {
        return parrot.ajax('http://echo.jsontest.com', {
          path: '/key/value/one/two'
        }, function(err, result) {
          result.one.should.eql('two');
          return done();
        });
      });
    });
  });

}).call(this);
