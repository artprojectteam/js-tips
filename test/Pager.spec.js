import assert from 'power-assert'
import Pager from '../tips/Pager'

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中1ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 1)

  it('list = [1,2,3,4,5]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3, 4, 5])
  })

  it('prev = -1 (前のページなし)', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = 2', () => {
    assert.equal(pages.next(), 2)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = true', () => {
    assert.equal(pages.showLast(), true)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中3ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 3)

  it('list = [1,2,3,4,5]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3, 4, 5])
  })

  it('prev = 2', () => {
    assert.equal(pages.prev(), 2)
  })

  it('next = 4', () => {
    assert.equal(pages.next(), 4)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = true', () => {
    assert.equal(pages.showLast(), true)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中4ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 4)

  it('list = [2,3,4,5,6]', () => {
    assert.deepEqual(pages.list(), [2, 3, 4, 5, 6])
  })

  it('prev = 3', () => {
    assert.equal(pages.prev(), 3)
  })

  it('next = 5', () => {
    assert.equal(pages.next(), 5)
  })

  it('最初のページを表示 = true', () => {
    assert.equal(pages.showFirst(), true)
  })

  it('最後のページを表示 = true', () => {
    assert.equal(pages.showLast(), true)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中8ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 8)

  it('list = [6,7,8,9,10]', () => {
    assert.deepEqual(pages.list(), [6, 7, 8, 9, 10])
  })

  it('prev = 7', () => {
    assert.equal(pages.prev(), 7)
  })

  it('next = 9', () => {
    assert.equal(pages.next(), 9)
  })

  it('最初のページを表示 = true', () => {
    assert.equal(pages.showFirst(), true)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中10ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 10)

  it('list = [6,7,8,9,10]', () => {
    assert.deepEqual(pages.list(), [6, 7, 8, 9, 10])
  })

  it('prev = 9', () => {
    assert.equal(pages.prev(), 9)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = true', () => {
    assert.equal(pages.showFirst(), true)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全10ページ中11ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 11)

  it('list = [6,7,8,9,10]', () => {
    assert.deepEqual(pages.list(), [6, 7, 8, 9, 10])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全3ページ中1ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(3, 5, 1)

  it('list = [1,2,3]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = 2', () => {
    assert.equal(pages.next(), 2)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全3ページ中2ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(3, 5, 2)

  it('list = [1,2,3]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3])
  })

  it('prev = 1', () => {
    assert.equal(pages.prev(), 1)
  })

  it('next = 3', () => {
    assert.equal(pages.next(), 3)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは中央 | 全3ページ中3ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(3, 5, 3)

  it('list = [1,2,3]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3])
  })

  it('prev = 2', () => {
    assert.equal(pages.prev(), 2)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全10ページ中1ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 1, false)

  it('list = [1,2,3,4,5]', () => {
    assert.deepEqual(pages.list(), [1, 2, 3, 4, 5])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = 2', () => {
    assert.equal(pages.next(), 2)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = true', () => {
    assert.equal(pages.showLast(), true)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全10ページ中2ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 2, false)

  it('list = [2,3,4,5,6]', () => {
    assert.deepEqual(pages.list(), [2, 3, 4, 5, 6])
  })

  it('prev = 1', () => {
    assert.equal(pages.prev(), 1)
  })

  it('next = 3', () => {
    assert.equal(pages.next(), 3)
  })

  it('最初のページを表示 = true', () => {
    assert.equal(pages.showFirst(), true)
  })

  it('最後のページを表示 = true', () => {
    assert.equal(pages.showLast(), true)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全10ページ中8ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 8, false)

  it('list = [6,7,8,9,10]', () => {
    assert.deepEqual(pages.list(), [6, 7, 8, 9, 10])
  })

  it('prev = 7', () => {
    assert.equal(pages.prev(), 7)
  })

  it('next = 9', () => {
    assert.equal(pages.next(), 9)
  })

  it('最初のページを表示 = true', () => {
    assert.equal(pages.showFirst(), true)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})


describe('ページャリスト(Pager) | カレントページは左端 | 全10ページ中0ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(10, 5, 0, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全0ページ中0ページ目 | 0ページごとに表示', () => {
  const pages = new Pager(0, 0, 0, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全-50ページ中-1ページ目 | -6ページごとに表示', () => {
  const pages = new Pager(-50, -1, -6, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全-50ページ中1ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(-50, 1, 5, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全50ページ中1ページ目 | -5ページごとに表示', () => {
  const pages = new Pager(50, 1, -5, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})

describe('ページャリスト(Pager) | カレントページは左端 | 全50ページ中-10ページ目 | 5ページごとに表示', () => {
  const pages = new Pager(50, -10, 5, false)

  it('list = []', () => {
    assert.deepEqual(pages.list(), [])
  })

  it('prev = -1', () => {
    assert.equal(pages.prev(), -1)
  })

  it('next = -1', () => {
    assert.equal(pages.next(), -1)
  })

  it('最初のページを表示 = false', () => {
    assert.equal(pages.showFirst(), false)
  })

  it('最後のページを表示 = false', () => {
    assert.equal(pages.showLast(), false)
  })
})