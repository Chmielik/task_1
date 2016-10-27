import React from 'react';
import CalendarComponent from './components/CalendarComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.state = {data: [
      {
        "id": 1,
        "doctor": {
          "account_id": 7,
          "id": 1,
          "title": "Blue Walker"
        },
        "patient": {
          "id": 2,
          "salutation": "Mrs.",
          "firstname": "Anna",
          "lastname": "A.",
          "gender": 0,
          "notify_email": false,
          "notify_sms": false,
          "language": "de"
        },
        "start_time": "09:00:00",
        "end_time": "10:00:00",
        "start_hour": 0,
        "day_number": 1
      },
      {
        "id": 2,
        "doctor": {
          "account_id": 5,
          "id": 3,
          "title": "Blue Walker"
        },
        "patient": {
          "id": 3,
          "salutation": "Mrs.",
          "firstname": "Trololo",
          "lastname": "A.",
          "gender": 0,
          "notify_email": false,
          "notify_sms": false,
          "language": "de"
        },
        "start_time": "15:00:00",
        "end_time": "16:00:00",
        "start_hour": 0,
        "day_number": 5
      }
    ]};
  }

  componentDidMount() {
    // setTimeout(() => {
    //   let newData = this.state.data;
    //   newData[0].day_number = 2;
    //   this.setState({ data: newData });
    // }, 1000);
  }

  onDrag (ev) {
    console.log("onDrag");
  }

  onDragEnd (ev) {
    console.log("onDragEnd");
  }

  onDragEnter (ev) {
  }

  onDragExit (ev) {
    console.log("onDragExit");
  }

  onDragLeave (ev) {
  }

  onDragOver (ev) {
    ev.preventDefault();
  }

  onDragStart (id) {
    this.state.eventId = id;
  }

  onDrop (hour, day) {
    let newData = this.state.data;
    newData[this.state.eventId - 1].day_number = day;
    let toHour = hour + 1;
    if(hour < 10) {
      hour = "0" + hour;
    }
    if(toHour < 10) {
      toHour = "0" + toHour;
    }
    toHour = toHour + ":00:00";
    hour = hour + ":00:00";
    newData[this.state.eventId -1].start_time = hour;
    newData[this.state.eventId -1].end_time = toHour;
    this.setState({ data: newData });
  }

  changeEvent() {

  }

  render() {
    const handlers = {
      'onDrag': this.onDrag,
      'onDragEnd': this.onDragEnd,
      'onDragEnter': this.onDragEnter,
      'onDragExit': this.onDragExit,
      'onDragLeave': this.onDragLeave,
      'onDragOver': this.onDragOver,
      'onDragStart': this.onDragStart,
      'onDrop': this.onDrop
    };

  return (
    <div>
      <CalendarComponent
        calendarDataObj = {this.state}
        handlers = {handlers}
        //onEventEdit = {this.onEventEditCallback}
        //onEventClick = {this.onEventClickCallback}
      />
    </div>
    );
  }
}
