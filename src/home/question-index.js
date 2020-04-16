import React, { useReducer, useEffect, Fragment } from 'react';

import AddQuestion from './add-question/add-question';
import PendingQuestion from './pending-question/pending-question';
import ResolvedQuestion from './resolved-question/resolved-question';
import Score from './score/score';
import {
    reducer, addQuestion, 
    updateQuestion, getResolved, 
    getPending, getScore
} from './rejection-reducer';


export default () => {
    const [questions, dispatch] = useReducer(reducer, reducer());

    useEffect(() => setQuestions(questions));
    
    const question = addQuestion();

    const setQuestions = (questions) => {
        localStorage.setItem('storeKey', JSON.stringify(questions));
    };
    

    return (
        <Fragment>
            <Score total={getScore(questions)}/>
            <AddQuestion
                onChange={
                    (e) => {
                        question.payload[e.target.name] = e.target.value
                        question.payload[e.target.name] = e.target.value
                    }
                }
                onClick={
                    () => {
                        if (question.payload.askee !== '' && question.payload.question !== '') {
                            dispatch(addQuestion(question.payload));
                            console.log(questions);
                            setQuestions(questions);
                            //console.log(localStorage.getItem('storeKey'));
                        }
                    }
                } />

            <PendingQuestion questions={getPending(questions)} onClick={
                (e) => {
                    const id = e.target.closest('tr.body-row').id;
                    if (e.target.className === 'accepted') {
                        dispatch(updateQuestion({id, status: 'Accepted'}));
                    } else if (e.target.className === 'rejected') {
                        dispatch(updateQuestion({id, status: 'Rejected'}));
                    }
                }
            } />

            <ResolvedQuestion questions={getResolved(questions)} /> 
        </Fragment>
    );
}

