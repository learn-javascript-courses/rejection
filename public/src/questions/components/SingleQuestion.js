import React from 'react';
import rfx from 'rfx';
const listItemStyles = {
    width: '300px',
    padding: '1em',
    margin: '.5em 0 0 .5em',
    border: '1px solid #fff'
}
const SingleQuestion = rfx`
// Take two values, a & b, and return the sum.
add2(a: n, b: n) => Number
`( 
    ({questionString = 'Default Question String', 
    answer = false, _createdBy = 'anonomyous@gmail.com', 
    askee = 'Mr. Anonomyous',
    dateAsked} = {}) => {
            return (
                <li style={{...listItemStyles}} className={answer}>
                    <h3>User: {_createdBy} </h3>
                    <h4>Question Asked: {questionString}</h4>
                    <h4>Asked to: {askee}</h4>
                    <h5>Date: {dateAsked}</h5>
                </li>
  )
}
);

export default SingleQuestion

