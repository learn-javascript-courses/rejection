const CREATE_ASK = 'ASK:CREATE';

export const createAsk = ({ question, askee } = {}) => ({
  type: CREATE_ASK,
  payload: {
    question,
    askee,
  },
});
