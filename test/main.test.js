/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const prefixClassname = require('../')

it('should prefix classname passed', function() {
  expect(prefixClassname('pp-')('jjjj', 'ooo')).toEqual('pp-jjjj pp-ooo')
  expect(prefixClassname('pp-')('jjjj', 'o oo')).toEqual('pp-jjjj pp-o pp-oo')
  expect(prefixClassname('pp-')()).toEqual('pp-')
  expect(prefixClassname('pp-')('')).toEqual('pp-')
  expect(prefixClassname('pp-')('', {x: false})).toEqual('pp-')

  expect(prefixClassname('ex-')('hiii', { o: false, pp: true })).toEqual(
    'ex-hiii ex-pp'
  )
})
