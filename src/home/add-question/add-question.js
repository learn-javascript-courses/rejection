import React, { Fragment } from 'react';

const AddQuestion = ({ onClick, onChange }) => {



    return (
        <Fragment>
            <label htmlFor='ask' id='askLabel'>Ask</label>
            <input type='text' name='question'
                onChange={onChange}  id='ask' ></input>
            <label htmlFor='askee' id='askeeLabel'>Askee</label>
            <input type='text' name='askee'
                onChange={onChange}  id='askee' ></input>
            <button type='button' id='addQuestion'
                onClick={onClick}>Add + </button>
        </Fragment>
    );
}
export default AddQuestion;