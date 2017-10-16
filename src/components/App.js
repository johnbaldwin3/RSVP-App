import React, { Component } from 'react';
import '../styles/App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
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
  getTotalInvited = () => {
    return this.state.guests.length;
  }
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone"/>
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAtIndex={this.toggleConfirmationAtIndex}
            toggleEditingAtIndex={this.toggleEditingAtIndex}
            setNameAtIndex={this.setNameAtIndex}
            isFiltered={this.state.isFiltered}/>
                  </div>
                </div>
    );
  }
}

export default App;
