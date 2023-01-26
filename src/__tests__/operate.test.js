import operate from '../logic/operate';

describe('test operate function', () => {
  test('expect 15 + 10 to be "25"', () => {
    expect(operate(15, 10, '+')).toBe('25');
  });
  test('expect 9 - 4 to be "5"', () => {
    expect(operate(9, 4, '-')).toBe('5');
  });
  test('expect 6 x 6 to be "36"', () => {
    expect(operate(6, 6, 'x')).toBe('36');
  });
  test('expect 13 ÷ 0 to be "Cant divide by 0."', () => {
    expect(operate(13, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('expect 100 % 5 to be "0"', () => {
    expect(operate(100, 5, '%')).toBe('0');
  });
});
