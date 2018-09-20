import cuid from 'cuid';

const CREATE_ASK = 'ASK:CREATE';

export const createAsk = ({ question, askee } = {}) => {
  const id = cuid();
  return {
    type: CREATE_ASK,
    payload: {
      id,
      question,
      askee,
    },
  };
};
