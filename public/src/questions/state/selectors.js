export const getQuestionListState = (state) => state.questionsAppState.questionsList.questions
export const getQuestionsByAnswer = state  => arg => getQuestionListState(state).filter(t => t.answer === arg);
export const getRejectedQuestions = (state) => arg => getQuestionListState(state).filter(t => t.answer === arg);
export const getAllQuestions = state => state.questionsAppState.questionsList;
export const getAcceptedQuestions = (state) => arg => getQuestionListState(state).filter(t => t.answer === arg);

export const getUserEmail = state => state.userState.email;

export const getUsersQuestions = state => getQuestionListState(state).filter(t => t._createdBy === "thomasjosephgreco@gmail.com");