import React from 'react';

const ResolvedQuestion = ({ questions }) => {
    return (
        <table className='resolved-questions'>
            <thead className='resolved-questions-header'>
                <tr className='resolved-header-row'>
                    <td className='resolved-header-data'></td>
                </tr>
            </thead>
            <tbody className='resolved-questions-body'>
                {questions.map((question, index) => {
                    return (
                        <tr key={question.id} id={question.id} className='body-row'>
                            <td className='body-data'>{question.id}</td>
                            <td className='body-data'>{question.askee}</td>
                            <td className='body-data'>{question.question}</td>
                            <td className='body-data'>{question.status}</td>
                        </tr>)
                })}
            </tbody>
        </table>
    );
};

export default ResolvedQuestion;