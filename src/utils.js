/**
 * @param {number} number
 * @param {number} min
 * @param {number} max
 */
function clampValue(number, min, max) {
  if (Number.isNaN(parseInt(number))) return min;
  return Math.max(min, Math.min(number, max));
}

module.exports = {
  clampValue,
};
