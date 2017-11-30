const expect = require('chai').expect
const { kgsToLibras, librasToKgs } = require('..')

describe('#weight-converter', function () {

  it('0 Kilogramos es igual a 0 Libras', function () {
    const libras = kgsToLibras(0)
    expect(libras).to.equal(0)
  })

  it('0 Libras es igual a 0 Kilogramos', function () {
    const kgs = librasToKgs(0)
    expect(kgs).to.equal(0)
  })

  it('1 Kilogramo es igual a 2.20462 Libras', function () {
    const libras = kgsToLibras(1)
    expect(libras).to.equal(2.20462)
  })

  it('2.20462 Libras son igual a 1 Kilogramo', function () {
    const kgs = librasToKgs(2.20462)
    expect(kgs).to.equal(1)
  })

  it('1 Libra es igual a 0.453592 Kilogramos', function () {
    const kgs = librasToKgs(1)
    expect(kgs).to.equal(0.453592)
  })

  it('0.453592 Kilogramos son igual a 1 Libra', function () {
    const libras = kgsToLibras(0.453592)
    expect(libras).to.equal(1)
  })

  it('15 Kilogramos es igual a 33.0693 Libras', function () {
    const libras = kgsToLibras(15)
    expect(libras).to.equal(33.0693)
  })

  it('33.0693 Libras es igual a 15 Kilogramos', function () {
    const kgs = librasToKgs(33.0693)
    expect(kgs).to.equal(15)
  })

  it('15 Libras es igual a 6.80388 Kilogramos', function () {
    const kgs = librasToKgs(15)
    expect(kgs).to.equal(6.80388)
  })

  it('6.80388 Kilogramos es igual a 15 Libras', function () {
    const libras = kgsToLibras(6.80388)
    expect(libras).to.equal(15)
  })

})