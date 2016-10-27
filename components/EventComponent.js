import React, { Component, PropTypes } from 'react';

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    let top = (this.props.data.start_time.slice(0, 2) - 8) * 132;
    if(this.props.day === this.props.data.day_number) {
      return(
        <a href="">
          <div className="event q4 past" draggable="true" style={{top}} onDrop={this.state.handlers.onDrop} onDragStart={this.state.handlers.onDragStart} onDragOver={this.state.handlers.onDragOverHandler}>
            <p className="hours">{this.props.data.start_time} - {this.props.data.end_time}</p>
            <p className="description">{this.props.data.patient.salutation} {this.props.data.patient.firstname} {this.props.data.patient.lastname}</p>
            <span className="icon"></span>
          </div>
        </a>
      );
    } else {
      return(null);
    }
  }
}

export default EventComponent;