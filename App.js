import React from 'react';
import CalendarComponent from './components/CalendarComponent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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
        "day_number": 6
      }
    ]};
  }

  render() {
    
    return (
      <div>
        <CalendarComponent 
          calendarDataObj = {this.state}
          //onEventEdit = {this.onEventEditCallback}  
          //onEventClick = {this.onEventClickCallback}
        />
      </div>
    );
  }
}
