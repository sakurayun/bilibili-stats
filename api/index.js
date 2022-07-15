const getUserInfo = require('../src/getUserInfo');
const renderCard = require('../src/renderStatsCard');

modules.exports = async (req, res) => {
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

    return res.send(renderCard(stats, card));
  } catch (e) {
    return res.send(e.message);
  }
};
