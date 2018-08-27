var expect = require('chai').expect
var CoolDogs = require('../app/index')

describe('What dogs are cool?', function () {
  describe('Only smart dogs are cool:', function () {
    it('Should tell me a bloodhound is cool', function () {
      expect(CoolDogs('bloodhound')).to.equal(true)
    })

    it('Should tell me a shitzu is NOT cool', function () {
      expect(CoolDogs('shitzu')).to.equal(false)
    })
  })
})
