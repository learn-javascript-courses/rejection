// https://gist.github.com/jed/982883 :)
const uuid = a => (a
  ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid));

export const addToHistory = values => ({
  type: 'ADD_QUESTION',
  status: values.status,
  id: uuid(),
  timestamp: new Date(),
  question: values.question,
  askee: values.askee,
});

export const updateHistory = values => ({
  type: 'UPDATE_QUESTION',
  status: values.status,
  id: values.id,
  timestamp: new Date(),
  question: values.question,
  askee: values.askee,
});

export const deleteFromHistory = id => ({
  type: 'DELETE_QUESTION',
  id,
});
