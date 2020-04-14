import React, { Fragment } from 'react';
import Questions from '../src/home/question-index';

export default function Index() {
    return (

        <Fragment>
            <div className='container' role='main'>
                <Questions />
            </div>
        </Fragment>

    );
}
