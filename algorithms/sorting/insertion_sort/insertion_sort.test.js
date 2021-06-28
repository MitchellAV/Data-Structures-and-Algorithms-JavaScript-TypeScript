const { insertion_sort } = require("./insertion_sort");
describe("Insertion Sort", () => {
  let unordered_list = [];

  test("test", () => {
    unordered_list = [5, 6, 4, 8];
    expect(insertion_sort(unordered_list)).toEqual([4, 5, 6, 8]);
    unordered_list = [5, 6, 4, 8, 1000, 5, 450, 5, 0.45, 7.458];
    expect(insertion_sort(unordered_list)).toEqual([
      0.45, 4, 5, 5, 5, 6, 7.458, 8, 450, 1000,
    ]);
  });
  test("edge cases", () => {
    unordered_list = [];
    expect(insertion_sort(unordered_list)).toEqual([]);
    unordered_list = [1, 2, 3, 4, 5];
    expect(insertion_sort(unordered_list)).toEqual([1, 2, 3, 4, 5]);
    unordered_list = [1, 1, 1, 1, 1];
    expect(insertion_sort(unordered_list)).toEqual([1, 1, 1, 1, 1]);
    unordered_list = [5, 4, 3, 2, 1];
    expect(insertion_sort(unordered_list)).toEqual([1, 2, 3, 4, 5]);
    unordered_list = [5, 4, 4, 1, 1];
    expect(insertion_sort(unordered_list)).toEqual([1, 1, 4, 4, 5]);
  });
});
