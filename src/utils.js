var nodeBase64Image = require('node-base64-image');

/**
 * @param {number} number
 * @param {number} min
 * @param {number} max
 */
function clampValue(number, min, max) {
  if (Number.isNaN(parseInt(number))) return min;
  return Math.max(min, Math.min(number, max));
}

/**
 *
 * @param {string} url
 * @returns {string} base64 image
 */
async function base64Image(url) {
  const base64 = await nodeBase64Image.encode(url, {
    string: true,
    headers: {
      'User-Agent': 'bilibili-stats',
    },
  });

  return `data:image/jpeg;base64,${base64}`;
}

module.exports = {
  clampValue,
  base64Image,
};
