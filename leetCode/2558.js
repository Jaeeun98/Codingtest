//Take Gifts From the Richest Plie
const pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    const max = Math.max(...gifts);
    const idx = gifts.indexOf(max);

    gifts.splice(idx, 1, Math.floor(Math.sqrt(max)));
  }

  const arrSum = gifts.reduce((sum, value) => sum + value);

  return arrSum;
};
