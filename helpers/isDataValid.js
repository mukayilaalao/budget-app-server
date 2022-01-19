const isDataValid = (a, b, c, d, e) => {
  if (a && !isNaN(b) && c && d && e) return true;
  return false;
};

module.exports = isDataValid;

/**
 * a  -name
 * b - amount
 * c - date
 * d -from
 * e -category
 */
