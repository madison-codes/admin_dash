import React from 'react';

export default ({ changePage, searchTerm}) => {
  return(
    <nav>
      <div className='main-logo'>
        <h1>Zotebook</h1>
      </div>
      <input type='text' onKeyUp={(e) => searchTerm(e.target.value)}></input>
      <button onClick={() => changePage('user')}>User</button>
      <button onClick={() => changePage('group')}>Group</button>
    </nav>
  )
}
