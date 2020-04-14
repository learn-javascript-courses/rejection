import React from 'react';
const Emoji = ({symbol, label}) => (
    <span
        className='emoji'
        role='img'
        aria-label={label ? label : ''}
        aria-hidden={label ? 'false' : 'true'}
    >
        {symbol}
    </span>
);
export default Emoji;