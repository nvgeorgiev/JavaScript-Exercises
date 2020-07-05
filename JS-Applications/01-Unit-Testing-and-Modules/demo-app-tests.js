const expect = require('chai').expect;
const app = require('./demo-app.js');

describe('Main functionality', function () {
  it('should return 5', function () {
    expect(app.getNumber()).to.be.equal(5);
  });

  it('should add 5 and 3 to get 8', function () {
    expect(app.addNumbers(5, 3)).to.be.equal(8);
  });
});
