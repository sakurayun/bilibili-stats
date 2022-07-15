const cards = require('./cards');
const { base64Image } = require('./utils');

/**
 * 信息卡片
 * @param {object} stats
 * @param {string} card
 * @returns {string}
 */
async function renderCard(
  { id, name, face, follower, following, charge, pendant },
  card = 'default'
) {
  card = cards[card] ?? cards['default'];

  card = card
    .replace(/{{id}}/g, id)
    .replace(/{{name}}/g, name)
    .replace(/{{face}}/g, await base64Image(face))
    .replace(/{{follower}}/g, follower)
    .replace(/{{following}}/g, following)
    .replace(/{{charge}}/g, charge)
    .replace(/{{pendant}}/g, await base64Image(pendant));

  return card;
}

module.exports = renderCard;
