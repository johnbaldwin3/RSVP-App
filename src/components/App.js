import React, { Component } from 'react';
import '../styles/App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
    {
      name: 'John',
      isConfirmed: false,
      isEditing: false,
    },
    {
      name: 'Nicki',
      isConfirmed: true,
      isEditing: false,
    },
    {
      name: 'Nina',
      isConfirmed: false,
      isEditing: true,
    }
  ],

  }
  toggleGuestPropertyAtIndex = (propertyToChange, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [propertyToChange]: !guest[propertyToChange]
          };
        }
        return guest;
      })
    })
  }
  toggleConfirmationAtIndex = index => {
   this.toggleGuestPropertyAtIndex("isConfirmed", index)
  }
  removeGuestAtIndex = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  }
  toggleEditingAtIndex = index => {
   this.toggleGuestPropertyAtIndex("isEditing", index)
  }
  setNameAtIndex = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    })
  }
  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered})
  }
  handleNameInput = (e) => {
    this.setState({ pendingGuest: e.target.value });
  }
  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }
  getTotalInvited = () => {
    return this.state.guests.length;
  }
  getAttendingGuests = () => {
    return this.state.guests.reduce((total, guest) =>
      guest.isConfirmed ? total + 1 : total, 0
  );
  }


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.state.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAtIndex={this.toggleConfirmationAtIndex}
          toggleEditingAtIndex={this.toggleEditingAtIndex}
          setNameAtIndex={this.setNameAtIndex}
          removeGuestAtIndex={this.removeGuestAtIndex}
          pendingGuest={this.state.pendingGuest}
        />
      </div>



    );
  }
}

export default App;
