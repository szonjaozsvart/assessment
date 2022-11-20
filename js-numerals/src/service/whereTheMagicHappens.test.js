let magic = require('./whereTheMagicHappens');

test('If the input is 7, the result should be seven !', () => {
    expect(magic(7)).toEqual('seven ')
})
test('If the input is 7, the result should be seven !', () => {
    expect(magic(17)).toEqual('seventeen ')
})

test('If the input is 42, the result should be forty-two !', () => {
    expect(magic(42)).toEqual('forty-two ')
})
test('If the input is 327, the result should be seven !', () => {
    expect(magic(327)).toEqual('three hundred and twenty-seven ')
})
test('If the input is 1999, the result should be one thousand nine hundred and ninety-nine !', () => {
    expect(magic(1999)).toEqual('one thousand nine hundred and ninety-nine ')
})

test('If the input is 2001, the result should be two thousand and one!', () => {
    expect(magic(2001)).toEqual('two thousand and one ')
})
test('If the input is 12345, the result should be seven !', () => {
    expect(magic(12345)).toEqual('twelve thousand three hundred and forty-five ')
})
test('If the input is 17999, the result should be seventeen thousand nine hundred and ninety-nine !', () => {
    expect(magic(17999)).toEqual('seventeen thousand nine hundred and ninety-nine ')
})

test('If the input is 100001, the result should be one hundred thousand and one !', () => {
    expect(magic(100001)).toEqual('one hundred thousand and one ')
})

test('If the input is 342251, the result should be three hundred and forty-two thousand two hundred and fifty-one !', () => {
    expect(magic(342251)).toEqual('three hundred and forty-two thousand two hundred and fifty-one ')
})
test('If the input is 34225121, the result should be three hundred and forty-two thousand two hundred and fifty-one !', () => {
    expect(magic(34225121)).toEqual('thirty-four million two hundred and twenty-five thousand one hundred and twenty-one ')
})

test('If the input is 1300420, the result should be one million three hundred thousand four hundred and twenty !', () => {
    expect(magic(1300420)).toEqual('one million three hundred thousand four hundred and twenty ')
})

test('If the input is 1300420, the result should not be one million three hundred thousand four hundred !', () => {
    expect(magic(1300420)).not.toEqual('one million three hundred thousand four hundred ')
})
