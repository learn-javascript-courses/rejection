// constants
export const SAVE_PROFILE = 'SAVE_PROFILE';

// action creators
export const saveProfile = userData => ({
  type: SAVE_PROFILE,
  userData
});
// selector
export const getProfile = ({ user = {} } = {}) => user;

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        ...action.userData
      };
    default:
      return state;
  }
}
