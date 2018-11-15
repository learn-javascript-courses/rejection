export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
