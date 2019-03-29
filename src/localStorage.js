export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('questions');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem('questions', JSON.stringify(state));
  }
  catch (error) {
    return undefined;
  }
};
