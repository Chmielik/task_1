import React, { Component, PropTypes } from 'react';

class EventRow extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        let top = (this.state.hour - 8) * 132;
        return (
            <div className="event q4 past" style={{top}}
                onDragEnter={this.state.handlers.onDragEnter}
                onDragExit={this.state.handlers.onDragExit}
                onDragLeave={this.state.handlers.onDragLeave}
                onDragOver={this.state.handlers.onDragOver}
                onDrop={() => { this.state.handlers.onDrop(this.props.hour, this.props.day) }}>
            </div>
        );
    }
}

export default EventRow;