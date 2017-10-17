import React from 'react';

import ConfirmedFilter from "./ConfirmedFilter";
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = props => {
  return (
    <div className="main">
      <ConfirmedFilter
        toggleFilter={props.toggleFilter}
        isFiltered={props.isFiltered}
      />
      <Counter
        totalInvited={props.totalInvited}
        numberAttending={props.numberAttending}
        numberUnconfirmed={props.numberUnconfirmed}
      />
      <GuestList
        guests={props.guests}
        removeGuestAtIndex={props.removeGuestAtIndex}
        pendingGuest={props.pendingGuest}
        toggleConfirmationAtIndex={props.toggleConfirmationAtIndex}
        toggleEditingAtIndex={props.toggleEditingAtIndex}
        setNameAtIndex={props.setNameAtIndex}
        isFiltered={props.isFiltered}/>
    </div>

  );
}


export default MainContent;
