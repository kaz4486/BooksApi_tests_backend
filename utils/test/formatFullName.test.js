const formatFullName = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {
  it('should return an error if "fullName" is missing', () => {
    expect(formatFullName()).to.equal('Error');
  });
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName(12)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function () {})).to.equal('Error');
  });
  it('should return an error if "fullName" format is invalid', () => {
    expect(formatFullName('John Doe Test')).to.equal('Error');
    expect(formatFullName('john')).to.equal('Error');
  });
});
