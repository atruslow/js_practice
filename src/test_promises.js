var assert = require('assert');
var chai = require('chai');

assert = chai.assert;


/**
 * Create a function that returns a promise.
 * The function should wait the specified timeMs, then return the message.
 *
 * @param timeMs millisecconds to wait before returning
 * @param message message to return to the caller
 * @returns {Promise<any>}
 */
let defferedTimeout = function(timeMs, message) {

};



describe('Promise', function() {

    it('should wait and then return the message', function(done) {

      let time = (new Date()).getTime();
      let wait = 50;
      let waitTolerance = wait + (wait * .1);

      defferedTimeout(wait, "yass").then(function (message) {
          assert.equal(message, "yass");
          assert((new Date()).getTime() <= time + waitTolerance, "waited too long");
          done()
      }).catch(function (err) {
            done(err);
      });
    });
});