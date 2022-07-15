const getUserInfo = require('../src/getUserInfo');
const renderCard = require('../src/renderStatsCard');
const { clampValue } = require('../src/utils');

module.exports = async (req, res) => {
  const { id, card, cache_seconds } = req.query;

  res.setHeader('Content-Type', 'image/svg+xml');

  try {
    const stats = await getUserInfo(String(id));

    const cacheSeconds = clampValue(
      parseInt(cache_seconds || 14400, 10),
      14400,
      86400
    );

    res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);

    return res.send(await renderCard(stats, card));
  } catch (e) {
    return res.send(e.message);
  }
};
