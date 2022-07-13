const axios = require('axios').default;

// 基本信息 https://api.bilibili.com/x/space/acc/info?mid=12951817
// 粉丝信息  https://api.bilibili.com/x/relation/stat?vmid=12951817
// 充电信息 https://api.bilibili.com/x/ugcpay-rank/elec/month/up?up_mid=12951817

module.exports = async (mid) => {
  if (!mid)
    throw new Error(
      'Missing params mid, make sure you pass the parameters in URL'
    );

  const stats = {
    id: mid,
    name: '',
    face: '',
    following: 0,
    follower: 0,
    charge: 0,
  };

  const [info, stat, up] = await Promise.all([
    axios.get(`https://api.bilibili.com/x/space/acc/info?mid=${mid}`),
    axios.get(`https://api.bilibili.com/x/relation/stat?vmid=${mid}`),
    axios.get(
      `https://api.bilibili.com/x/ugcpay-rank/elec/month/up?up_mid=${mid}`
    ),
  ]);

  if (!!info.data.code || !!stat.data.code || !!up.data.code) {
    throw new Error('Could not fetch user');
  }

  stats.name = info.data.data.name;
  stats.face = info.data.data.face;
  stats.follower = stat.data.data.follower;
  stats.following = stat.data.data.following;
  stats.charge = up.data.data.total;

  return stats;
};
