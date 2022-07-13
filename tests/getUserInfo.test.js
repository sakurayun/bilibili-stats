const getUserInfo = require('../src/getUserInfo');

test('getUserInfo', async () => {
  const data = await getUserInfo(12951817);

  expect(data.id).toBe(12951817);
});
