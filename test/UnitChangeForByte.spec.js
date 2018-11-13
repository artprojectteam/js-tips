import assert from 'power-assert'
import UnitChangeForByte from '../tips/UnitChangeForByte'

describe('ファイルサイズを適切な単位に変換', () => {
  it('1000byte => 1000byte', () => {
    assert.equal(UnitChangeForByte(1000), '1000byte')
  })

  it('1024byte => 1KB', () => {
    assert.equal(UnitChangeForByte(1024), '1KB')
  })

  it('1048576byte => 1MB', () => {
    assert.equal(UnitChangeForByte(1048576), '1MB')
  })

  it('1073741824byte => 1GB', () => {
    assert.equal(UnitChangeForByte(1073741824), '1GB')
  })

  it('1099511627776byte => 1TB', () => {
    assert.equal(UnitChangeForByte(1099511627776), '1TB')
  })
})