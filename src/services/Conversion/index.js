const binaryToDecimal = {
  from: "binary",
  to: "decimal",
  conversionFunction: (value) => (value == "" ? "" : value * 2),
};

export default binaryToDecimal;
