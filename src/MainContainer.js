import React from 'react';
import UserPage from './UserPage';
import GroupPage from './GroupPage';

export default ({ pageType, sketches, groupMembers, searchTerm }) => {
  if (pageType === 'user') {
    return(
      <UserPage
        sketches={ sketches }
        searchTerm={ searchTerm }
      />
    )
  } else {
    return (
      <GroupPage
        groupMembers={ groupMembers }
        sketches={ sketches }
        searchTerm={ searchTerm }
      />
    )
  }
}
