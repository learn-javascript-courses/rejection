import React from 'react'


const UserInfo = ({ firstName, lastName, email, questions}) => {
  return (
  <div>
     <div className="userDetailsDiv">
          <h4>User Name:</h4>
          <p> {firstName} {lastName}</p>
        </div>
        <div className="userDetailsDiv">
          <h4>Email Address:</h4>
          <p> {email}</p>
        </div>
  </div>
  )
}

export default UserInfo