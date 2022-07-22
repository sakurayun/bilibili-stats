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

/**
 * @see https://stackoverflow.com/a/48073476/10629172
 * @param {string} str
 * @returns {string}
 */
function encodeHTML(str) {
  return str
    .replace(/[\u00A0-\u9999<>&](?!#)/gim, (i) => {
      return '&#' + i.charCodeAt(0) + ';';
    })
    .replace(/\u0008/gim, '');
}

/**
 * @param {string} message
 * @param {string} secondaryMessage
 * @returns {string}
 */
export function renderError(message, secondaryMessage = '') {
  return `
    <svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
    .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #2F80ED }
    .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
    .gray { fill: #858585 }
    </style>
    <rect x="0.5" y="0.5" width="399" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
    <text x="25" y="45" class="text">系统错误</text>
    <text data-testid="message" x="25" y="55" class="text small">
      <tspan x="25" dy="18">${encodeHTML(message)}</tspan>
      <tspan x="25" dy="18" class="gray">${secondaryMessage}</tspan>
    </text>
    </svg>
  `;
}

module.exports = {
  clampValue,
  base64Image,
  renderError,
};
