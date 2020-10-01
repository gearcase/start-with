'use strict';

var expect = require('chai').expect;

describe('start-with: ', function () {

  var startWith = require('../../index');

  it('startWith() => false', function () {
    expect(startWith()).to.equal(false);
  });

  it('startWith(\'\') => false', function () {
    expect(startWith('')).to.equal(false);
  });

  it('startWith(\'\', null) => false', function () {
    expect(startWith('', null)).to.equal(false);
  });

  it('startWith(\'\', \'\') => true', function () {
    expect(startWith('', '')).to.equal(true);
  });

  it('startWith(\'abc\', \'\') => true', function () {
    expect(startWith('abc', '')).to.equal(true);
  });

  it('startWith(\'abc\', \'a\') => true', function () {
    expect(startWith('abc', 'a')).to.equal(true);
  });

  it('startWith(\'abc\', \'ab\') => true', function () {
    expect(startWith('abc', 'ab')).to.equal(true);
  });

  it('startWith(\'abc\', \'b\') => false', function () {
    expect(startWith('abc', 'b')).to.equal(false);
  });

  it('startWith(\'abc\', \'bc\') => false', function () {
    expect(startWith('abc', 'bc')).to.equal(false);
  });

  it('startWith(\'abc\', \'bc\', -1) => false', function () {
    expect(startWith('abc', 'abc', -1)).to.equal(true);
  });

  it('startWith(\'abc\', \'bc\', 1) => false', function () {
    expect(startWith('abc', 'bc', 1)).to.equal(true);
  });

  it('startWith(\'abc\', \'abc\', 10) => false', function () {
    expect(startWith('abc', 'abc', 10)).to.equal(false);
  });

  it('startWith(\'abc\', \'abc\', \'foo\') => false', function () {
    expect(startWith('abc', 'abc', 'foo')).to.equal(true);
  });

  it('startWith(\'abc\', \'abcd\') => false', function () {
    expect(startWith('abc', 'abcd')).to.equal(false);
  });
});
