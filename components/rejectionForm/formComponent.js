import React from 'react';


export default ({ input, meta: { touched, error }, ...custom }) => (
  <div>
    <input type="text" {...input} {...custom} />
  </div>
);

