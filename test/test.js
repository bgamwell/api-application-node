var mocha = require('mocha');
var request = require('request');
var expect = require('chai').expect;
var cheerio = require('cheerio');

var baseUrl = 'http://localhost:3000';

var apiUsers = 'http://localhost:3000/api/users';

// Testing http response
describe('My Users List', function() {
  it('should have an HTTP of 200 - success', function(done) {
    request(baseUrl, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // console.log(err);
      // console.log(res);
      // expect(res.statusCode).to.equal(300)
      done();
    });
  });
});

// Using cheerio to check the body html of a page for specific items
describe('Google.com', function() {
  it('should have a title of "Users list!"', function(done) {
    request(baseUrl, function(err, res, body) {
      var $ = cheerio.load(body);
      var title = $('title').text();
      expect(title).to.equal('User List!');
      // expect(title).to.equal('Moogle');
      done();
    });
  });
});

// Making sure my api responds with a 200
describe('My Users JSON', function() {
  it('should have an HTTP of 200 - success', function(done) {
    request(apiUsers, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      // console.log(err);
      // console.log(res);
      // expect(res.statusCode).to.equal(300)
      done();
    });
  });
});
