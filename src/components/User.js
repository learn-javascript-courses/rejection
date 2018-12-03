import React from 'react';

const toggleDropdown = (e) => {
  e.preventDefault();
  const dropdown = document.getElementById('user-dropdown');
  const dropdownMenu = document.getElementById('user-dropdown-menu');
  dropdown.classList.toggle('show');
  dropdown.classList.toggle('active');
  dropdownMenu.classList.toggle('show');
};

const User = ({ user, logout }) => (
  <div>
    {user.name ? (
      <div
        id="user-dropdown"
        className="dropdown dropdown-toggle"
        role="button"
        tabIndex="0"
        onClick={toggleDropdown}
        onKeyPress={toggleDropdown}
      >
        <span className="mr-3">{user.displayName}</span>
        <img alt="" src={user.photo} />
        <div id="user-dropdown-menu" className="dropdown-menu dropdown-menu-right">
          <button className="dropdown-item" type="button" onClick={logout} onKeyPress={logout}>
            <b>Sign out</b>
          </button>
        </div>
      </div>
    ) : (
      ''
    )}
  </div>
);

export default User;
