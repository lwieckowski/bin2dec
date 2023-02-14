/**
 * Binary to decimal converter object.
 */
const binaryToDecimal = {
  from: "binary",
  to: "decimal",
  /**
   * Convert binary to decimal.
   * @param {string} value - binary number.
   * @returns {number}
   */
  convert: (value) => {
    const digits = value.length;
    let result = 0;
    for (let index = 0; index < digits; index++) {
      result += value[index] * Math.pow(2, digits - index - 1);
    }
    return result;
  },
  /**
   * Check if value is a valid input for this converter (a binary number).
   * @param {string} value - value to check.
   * @returns {boolean}
   */
  isValidInput: (value) => {
    for (const digit of value) {
      if (!(digit in [0, 1])) return false;
    }
    return true;
  },
};

export default binaryToDecimal;
