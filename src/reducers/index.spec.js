import { updating } from './index';

describe('updating reducer', () => {
  it('set updating', () => {
    expect(updating({ isUpdating: false }, { type: 'START_UPDATING' })).toEqual({
      isUpdating: true,
    });
  });

  it('stop updating', () => {
    expect(updating({ isUpdating: true }, { type: 'STOP_UPDATING' })).toEqual({
      isUpdating: false,
    });
  });
});
