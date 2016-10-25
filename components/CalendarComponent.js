import React from 'react';
import ReactDOM from 'react-dom';

export default class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.calendarDataObj;
    console.log(this.props.calendarDataObj)
  }

  render() {
    const days = [1, 2, 3, 4, 5, 6, 7];
    let eventsObject = days.map(data => {
      return <DayRow key={data} days={data} events={this.state} />
    });
    return (
      <div id="terminplaner">
        <div className="header">
          <h2>Terminplaner</h2>
          <div className="control">
            <span className="prev">&lt;</span>
            <span className="date">6 &mdash; 12. Juli 2015</span>
            <span className="next">&gt;</span>
          </div>
          <span className="month"></span>
          <span className="slider"></span>
        </div>
        <div className="table">
          <div className="events">
            {eventsObject}
          </div>
          <table>
            <thead>
              <tr>
                <td>Uhrzeit</td>
                <td>Mo 06.07.</td>
                <td>Di 07.07.</td>
                <td className="active">Mi 08.07.</td>
                <td>Do 09.07.</td>
                <td>Fr 10.07.</td>
                <td className="free" >Sa 11.07.</td>
                <td className="free" >So 12.07.</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hour">08:00</td>
                <td ></td>
                <td ></td>
                <td className="active"></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td className="hour">09:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">10:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">11:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">12:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td className="hour">13:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td ></td>
                <td ></td>
                <td ></td>
                <td ></td>
              </tr>
              <tr>
                <td className="hour">14:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">15:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">16:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">17:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">18:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">19:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="hour">20:00</td>
                <td></td>
                <td></td>
                <td className="active"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


const DayRow = (props) => {
  return(
    <div className="day" data-day={`${props.days}`}>
    </div>
  )
}

const EventRow = (props) => {
  return(
    <a href=""><div className="event q4 past" draggable="true" style={{top: 0}}>
      <p className="hours">08:00 - 09:00</p>
      <p className="description">Meier</p>
      <span className="icon"></span>
    </div></a>
  )
}