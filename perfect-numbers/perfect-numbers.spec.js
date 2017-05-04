var PerfectNumbers = require('./perfect-numbers');

describe('Exercise - Perfect Numbers', function() {

  var perfectNumbers;

  beforeEach(function () {
    perfectNumbers = new PerfectNumbers();
  });

  describe('Perfect Numbers', function() {

    xit('Smallest perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(6)).toEqual('perfect');
    });

    xit('Medium perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(28)).toEqual('perfect');
    });

    xit('Large perfect number is classified correctly', function() {
      expect(perfectNumbers.classify(33550336)).toEqual('perfect');
    });

  });

  describe('Abundant Numbers', function() {

    xit('Smallest abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(12)).toEqual('abundant');
    });

    xit('Medium abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(30)).toEqual('abundant');
    });

    xit('Large abundant number is classified correctly', function() {
      expect(perfectNumbers.classify(33550335)).toEqual('abundant');
    });

  });

  describe('Deficient Numbers', function() {

    xit('Smallest prime deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(2)).toEqual('deficient');
    });

    xit('Smallest non-prime deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(4)).toEqual('deficient');
    });

    xit('Medium deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(32)).toEqual('deficient');
    });

    xit('Large deficient number is classified correctly', function() {
      expect(perfectNumbers.classify(33550337)).toEqual('deficient');
    });

    xit('Edge case (no factors other than itself) is classified correctly', function() {
      expect(perfectNumbers.classify(1)).toEqual('deficient');
    });

  });

  describe('Invalid Inputs', function() {

    xit('Zero is rejected (not a natural number)', function() {
      expect(perfectNumbers.classify(0)).toEqual('Classification is only possible for natural numbers.');
    });

    xit('Negative integer is rejected (not a natural number)', function() {
      expect(perfectNumbers.classify(-1)).toEqual('Classification is only possible for natural numbers.');
    });

  });

});
