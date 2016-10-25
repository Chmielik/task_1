import React from 'react';

export default class EventComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return(<div>
      <div className="day" data-day="1">
        
      </div>

      <div className="day" data-day="2">
      </div>

      <div className="day" data-day="3">
      </div>

      <div className="day" data-day="4">
      </div>

      <div className="day" data-day="5">
      </div>

      <div className="day"  data-day="6">
      </div>
      
      <div className="day" data-day="7">
      </div>
    </div>)
    var days = [];

    for(var i = 0; i < 7; i++) {
      var day = i;
      days.push(<div className="day" data-day={day} />);
      if(this.props.calendarDataObj[0].day_number == day) {
        days.push(
          <a href=""><div className="event q4 past" draggable="true" style={{top: 0}}>
            <p className="hours">08:00 - 09:00</p>
            <p className="description"></p>
            <span className="icon"></span>
          </div></a>
        );
      }
      days.push(<div />);
    }
  }
}