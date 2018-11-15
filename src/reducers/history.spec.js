import { history } from './history';
import { addToHistory, updateHistory, deleteFromHistory } from '../actions';
import { sampleHistoryObj } from '../containers/App.spec';

describe('history reducers', () => {
  it('add to history', () => {
    const result = history([], addToHistory(sampleHistoryObj.history[0]));
    expect(result[0].askee).toEqual(sampleHistoryObj.history[0].askee);
  });

  it('update history', () => {
    const update = sampleHistoryObj.history[0];
    update.question = 'New Question';
    update.askee = 'New Askee';
    update.status = 'accepted';

    const result = history(sampleHistoryObj.history, updateHistory(update));
    expect(result[0].id).toBe(update.id);
    expect(result[0].question).toBe(update.question);
    expect(result[0].askee).toBe(update.askee);
    expect(result[0].status).toBe(update.status);
  });

  it('delete from history', () => {
    const { id } = sampleHistoryObj.history[0];
    const result = history(sampleHistoryObj.history, deleteFromHistory(id));
    expect(result[0].id).not.toBe(id);
  });
});
