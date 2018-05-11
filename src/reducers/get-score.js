const getScore = store => store.reduce((a, c) => a + c.score, 0);

export default getScore;
