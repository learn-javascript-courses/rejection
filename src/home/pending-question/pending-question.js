import React, { Fragment } from 'react';

const PendingQuestion = ({ questions, onClick }) => {
    return (
        <Fragment>
            <hr />
            <table className='pending-questions'>
                <thead className='pending-questions-header'>
                    <tr className='pending-header-row'>
                        <td className='pending-header-data'></td>
                    </tr>
                </thead>

                <tbody className='pending-questions-body'>

                    {questions.map((question, index) => {
                        
                        return (
                            <tr key={question.id} id={question.id} className='body-row'>
                                <td className='body-data'>{question.id}</td>
                                <td className='body-data'>{question.askee}</td>
                                <td className='body-data'>{question.question}</td>
                                <td className='body-data'>{question.status}</td>
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

           

        </Fragment>
    );
};

export default PendingQuestion;
