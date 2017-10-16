import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
<ul>
  {props.guests
    .filter(guest => !props.isFiltered || guest.isConfirmed)
    .map((guest, index) =>
    <Guest
      key={index}
      name={guest.name}
      isConfirmed={guest.isConfirmed}
      isEditing={guest.isEditing}
      handleConfirmation={ ()=> props.toggleConfirmationAtIndex(index)}
      handleToggleEditing={()=> props.toggleEditingAtIndex(index)}
      setName={text => props.setNameAtIndex(text, index)}
    /> )}

</ul>

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAtIndex: PropTypes.func.isRequired,
  toggleEditingAtIndex: PropTypes.func.isRequired,
  setNameAtIndex: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
}

export default GuestList;
