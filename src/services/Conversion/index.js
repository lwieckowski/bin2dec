const binaryToDecimal = {
  from: "binary",
  to: "decimal",
  conversionFunction: value => {
    const digits = value.length;
    let result = 0;
    for (let index = 0; index < digits; index++) {
        result += value[index] * Math.pow(2, digits - index - 1);
    }
    return result;
  }
};

export default binaryToDecimal;
