import { groupArrayElements } from './helpers'

describe("helpers", () => {
  it("groupArrayElements works for normal behaviour", () => {
    let actual = groupArrayElements([1, 2, 3], 3);
    expect(actual).toStrictEqual([[1], [2], [3]]);

    actual = groupArrayElements(['a', 'b', 'c'], 3);
    expect(actual).toStrictEqual([['a'], ['b'], ['c']]);

    actual = groupArrayElements([], 2);
    expect(actual).toStrictEqual([[], []]);
  })
  
  it("groupArrayElements works when the array can't be divided in equal parts", () => {
    let actual = groupArrayElements([1, 2, 3, 4, 5], 3);
    expect(actual).toStrictEqual([[1, 2], [3, 4], [5]]);

    actual = groupArrayElements([1, 2, 3, 4], 3);
    expect(actual).toStrictEqual([[1, 2], [3], [4]]);

    actual = groupArrayElements([1, 2], 3);
    expect(actual).toStrictEqual([[1], [2], []]);
  })

  it("groupArrayElements throws exception for invalid parameters", () => {
    expect(() => groupArrayElements([], '1')).toThrow();
    expect(() => groupArrayElements([], {})).toThrow();
    expect(() => groupArrayElements([], 0.1)).toThrow();
    expect(() => groupArrayElements(() => ([]), 1)).toThrow();
    expect(() => groupArrayElements({}, 1)).toThrow();
    expect(() => groupArrayElements('', 1)).toThrow();
    expect(() => groupArrayElements(0.1, 1)).toThrow();
  })
})