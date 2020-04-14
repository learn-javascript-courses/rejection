import React, { Fragment } from 'react';

const PendingQuestion = ({ questions, onClick }) => {
    return (
            <div className='row justify-content-center'>
            <div className='col-8'>
            <h2 className='tableTitles d-flex table-titles justify-content-center'>Pending Questions</h2>
            <div className='table-responsive'>
            <table className='pending-questions table my-3'>
                <thead className='pending-questions-header sr-only'>
                    <tr className='pending-header-row'>
                        <td className='pending-header-data question-id sr-only'>ID</td>
                        <td className='pending-header-data'>Askee</td>
                        <td className='pending-header-data'>Question</td>
                        <td className='pending-header-data question-status sr-only'>Status</td>
                        <td className='pending-header-data'>Accepted</td>
                        <td className='pending-header-data'>Rejected!!</td>
                    </tr>
                </thead>

                <tbody className='pending-questions-body'>

                    {questions.map((question, index) => {
                        
                        return (
                            <tr key={question.id} id={question.id} className='body-row'>
                                <td className='body-data question-id'>{question.id}</td>
                                <td className='body-data'>{question.askee}</td>
                                <td className='body-data'>{question.question}</td>
                                <td className='body-data question-status'>{question.status}</td>
                                <td className='body-data'><button className="accepted"
                                    onClick={onClick}>Accepted</button>
                                </td>
                                <td className='body-data'><button className="rejected"
                                    onClick={onClick}>Rejected</button>
                                </td>
                            </tr>)

                    })
                    }

                </tbody>

            </table>
            </div>
            </div>
            </div>
    );
};

export default PendingQuestion;
