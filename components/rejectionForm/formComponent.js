import React from 'react';


export default ({ input, meta: { touched, error }, ...custom }) => {
  return (
    <div>
      <input type="text" {...input} {...custom} />
    </div>
  )
}
