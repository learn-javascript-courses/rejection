import React from 'react';
import Emoji from '../emoji/emoji';

const ResolvedQuestion = ({ questions }) => {
    return (

        <div className='row justify-content-center'>
            <div className='col-8'>
                <h2 className='d-flex justify-content-center table-title'>Resolved Questions</h2>
                <div className='table-responsive'>
                    <table className='resolved-questions table my-3'>
                        <thead className='resolved-questions-header'>
                            <tr className='resolved-header-row'>
                                <td className='resolved-header-data'>ID</td>
                                <td className='resolved-header-data'>Askee</td>
                                <td className='resolved-header-data'>Question</td>
                                <td className='resolved-header-data question-status'>Askee</td>
                                <td className='resolved-header-data question-status'>Emoji</td>
                            </tr>
                        </thead>
                        <tbody className='resolved-questions-body'>
                            {questions.map((question) => {
                                return (
                                    <tr key={question.id} id={question.id} className='body-row'>
                                        <td className='body-data question-id sr-only'>{question.id}</td>
                                        <td className='body-data'>{question.askee}</td>
                                        <td className='body-data'>{question.question}</td>
                                        <td className='body-data'>{question.status}</td>
                                        <td><Emoji symbol={'🔥'} label={'fire'} /></td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ResolvedQuestion;