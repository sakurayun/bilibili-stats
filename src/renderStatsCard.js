const cards = require('./cards');

/**
 * 信息卡片
 * @param {object} stats
 * @param {string} card
 * @returns {string}
 */
function renderCard(
  { id, name, face, follower, following, charge, pendant },
  card = 'default'
) {
  card = cards[card] ?? cards['default'];

  card = card
    .replace(/{{id}}/g, id)
    .replace(/{{name}}/g, name)
    .replace(/{{face}}/g, face)
    .replace(/{{follower}}/g, follower)
    .replace(/{{following}}/g, following)
    .replace(/{{charge}}/g, charge)
    .replace(/{{pendant}}/g, pendant);

  return card;
}

module.exports = renderCard;
