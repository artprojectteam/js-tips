import assert from 'power-assert'
import jsdom from 'jsdom'
import GetUrlParameter from '../tips/GetUrlParameter'
import { HTML } from './_html'

const { JSDOM } = jsdom

describe('URLパラメータ(GetUrlParameter)', () => {
  it('a=1,b=2', () => {
    const doc = new JSDOM(HTML, {
      url: 'http://foobar/?a=1&b=2'
    })
    global.window = doc.window

    const params = GetUrlParameter()
    assert.deepEqual(params, {
      a: 1,
      b: 2
    })
  })

  it('パラメータなし', () => {
    const doc = new JSDOM(HTML, {
      url: 'http://foobar'
    })
    global.window = doc.window

    const params = GetUrlParameter()
    assert.equal(Object.keys(params).length, 0)
  })
})