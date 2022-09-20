// 基本信息 https://api.bilibili.com/x/space/acc/info?mid=12951817
// 粉丝信息  https://api.bilibili.com/x/relation/stat?vmid=12951817
// 充电信息 https://api.bilibili.com/x/ugcpay-rank/elec/month/up?up_mid=12951817

const axios = require('axios').default;

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36';

axios.defaults.headers.common['user-agent'] = UA;

/**
 * 获取用户 B 站（无需 token）数据
 * @param {string} id
 * @returns {Promise<Stats>}
 */
async function getUserInfo(id) {
  if (!id)
    throw new Error(
      'Missing params mid, make sure you pass the parameters in URL'
    );

  const stats = {
    id: id,
    name: '',
    face: '',
    following: 0,
    follower: 0,
    charge: 0,
    pendant: '',
  };

  try {
    const [info, stat, up] = await Promise.all([
      axios.get(`https://api.bilibili.com/x/space/acc/info?mid=${id}`),
      axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${id}`),
      axios.get(
        `https://api.bilibili.com/x/ugcpay-rank/elec/month/up?up_mid=${id}`
      ),
    ]);

    if (!!info.data.code || !!stat.data.code) {
      throw new Error('Could not fetch user');
    }

    stats.name = info.data.data?.name;
    stats.face = info.data.data?.face;
    stats.pendant = info.data.data?.pendant?.image;
    stats.follower = stat.data.data?.follower;
    stats.following = stat.data.data?.following;
    // 可能未开通充电
    stats.charge = up.data?.data?.total ?? 0;
  } catch (e) {
    throw e;
  }

  return stats;
}

module.exports = getUserInfo;
