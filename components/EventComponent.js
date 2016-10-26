import React, { Component, PropTypes } from 'react';

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  onDragOver(ev) {
    console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
  };

  onDragStart(ev) {
    console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
    ev.dataTransfer.setData("text/html", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    console.log(ev.dataTransfer);
  };
  
  onDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
  };


  render() {
    let top = (this.props.data.start_time.slice(0, 2) - 8) * 132;
    if(this.props.day === this.props.data.day_number) {
      return(
        <a href="">
          <div className="event q4 past" draggable="true" style={{top}} onDragStart={this.onDragStart} onDragOver={this.onDragOver}>
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