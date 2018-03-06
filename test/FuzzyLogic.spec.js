import assert from 'power-assert'
import FuzzyLogic from '../tips/FuzzyLogic'

describe('ファジィ理論 | 右肩上がりの傾斜 (FuzzyLogic.Grade)', () => {
  /**
   * 現在の経験値/次の経験値(25,000)に対するメッセージ
   * 30%未満 => 全然
   * 30%以上〜80%未満 => 半分くらい
   * 80%以上〜100%未満 => もう少し
   * 100%以上 => Lvアップ
   * @param exp - 経験値
   * @return {*}
   */
  const getNowExpMessage = (exp) => {
    const fuzzy = FuzzyLogic.Grade((exp / 25000), 0, 1)
    if (fuzzy < 0.3) return '全然'
    if (fuzzy < 0.8) return '半分くらい'
    if (fuzzy < 1) return 'あと少し'
    return 'Lvアップ'
  }

  it('経験値:0/25,000 => 全然', () => {
    assert.equal(getNowExpMessage(0), '全然')
  })

  it('経験値:200/25,000 => 全然', () => {
    assert.equal(getNowExpMessage(200), '全然')
  })

  it('経験値:10,000/25,000 => 半分くらい', () => {
    assert.equal(getNowExpMessage(10000), '半分くらい')
  })

  it('経験値:15,000/25,000 => 半分くらい', () => {
    assert.equal(getNowExpMessage(15000), '半分くらい')
  })

  it('経験値:20,000/25,000 => あと少し', () => {
    assert.equal(getNowExpMessage(20000), 'あと少し')
  })

  it('経験値:23,000/25,000 => あと少し', () => {
    assert.equal(getNowExpMessage(23000), 'あと少し')
  })

  it('経験値:25,000/25,000 => Lvアップ', () => {
    assert.equal(getNowExpMessage(25000), 'Lvアップ')
  })

  it('経験値:30,000/25,000 => Lvアップ', () => {
    assert.equal(getNowExpMessage(30000), 'Lvアップ')
  })
})

describe('ファジィ理論 | 右肩下がりの逆傾斜 (FuzzyLogic.ReverseGrade)', () => {
  /**
   * 空腹率の割合におけるメッセージ
   * 80%以上 => 満腹
   * 50%以上〜80%未満 => 小腹すいた
   * 30%以上〜50%未満 => お腹すいた
   * 1%以上〜30%未満 => 早く食べたい
   * 0%以下 => 死にそうだ
   * @param satiety {number} - 満腹率
   * @return {string}
   */
  const getHungerMessage = (satiety) => {
    const hunger = FuzzyLogic.ReverseGrade((satiety / 100), 0, 1)
    if (hunger > 0.9) return '死にそうだ'
    if (hunger > 0.7) return '早く食べたい'
    if (hunger > 0.5) return 'お腹すいた'
    if (hunger > 0.3) return '小腹すいた'
    return '満腹'
  }

  it('満腹率:100/100 => 満腹', () => {
    assert.equal(getHungerMessage(100), '満腹')
  })

  it('満腹率:80/100 => 満腹', () => {
    assert.equal(getHungerMessage(80), '満腹')
  })

  it('満腹率:70/100 => 小腹すいた', () => {
    assert.equal(getHungerMessage(70), '小腹すいた')
  })

  it('満腹率:50/100 => 小腹すいた', () => {
    assert.equal(getHungerMessage(50), '小腹すいた')
  })

  it('満腹率:40/100 => お腹すいた', () => {
    assert.equal(getHungerMessage(30), 'お腹すいた')
  })

  it('満腹率:30/100 => お腹すいた', () => {
    assert.equal(getHungerMessage(30), 'お腹すいた')
  })

  it('満腹率:20/100 => 早く食べたい', () => {
    assert.equal(getHungerMessage(20), '早く食べたい')
  })

  it('満腹率:10/100 => 早く食べたい', () => {
    assert.equal(getHungerMessage(10), '早く食べたい')
  })

  it('満腹率:5/100 => 死にそうだ', () => {
    assert.equal(getHungerMessage(1), '死にそうだ')
  })

  it('満腹率:0/100 => 死にそうだ', () => {
    assert.equal(getHungerMessage(0), '死にそうだ')
  })
})