import { history, initialState } from './history';
import { addHistorySuccess, updateHistorySuccess, deleteHistorySuccess } from '../actions';
import { sampleHistoryObj } from '../containers/App.spec';

describe('async history reducers', () => {
  it('add to history success', () => {
    const result = history(initialState, addHistorySuccess(sampleHistoryObj.data[0]));
    expect(result.data[0].askee).toEqual(sampleHistoryObj.data[0].askee);
  });

  it('update history success', () => {
    const update = sampleHistoryObj.data[0];
    update.question = 'New Question';
    update.askee = 'New Askee';
    update.status = 'accepted';

    const stateForUpdate = initialState;
    stateForUpdate.data = sampleHistoryObj.data;

    const { data } = history(stateForUpdate, updateHistorySuccess(update));
    expect(data[0].id).toBe(update.id);
    expect(data[0].question).toBe(update.question);
    expect(data[0].askee).toBe(update.askee);
    expect(data[0].status).toBe(update.status);
  });

  it('delete from history success', () => {
    const { id } = sampleHistoryObj.data[0];
    const stateForDelete = initialState;
    stateForDelete.data = sampleHistoryObj.data;
    const { data } = history(stateForDelete, deleteHistorySuccess(id));
    expect(data[0].id).not.toBe(id);
  });
});
