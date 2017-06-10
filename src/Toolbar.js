import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 0
        };
    }
    zoomIn(e) {
        if (this.props.onZoomIn) {
            this.props.onZoomIn(e);
        }
    }
    zoomOut(e) {
        if (this.props.onZoomOut) {
            this.props.onZoomOut(e);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.scale !== nextState.scale) {
            return true;
        }
        return false;
    }
    render() {
        return (<div className="Toolbar">
            <button className="ZoomIn" onClick={(e) => this.zoomOut(e)}>-</button>
            <button className="ZoomOut" onClick={(e) => this.zoomIn(e)}>+</button>
            <div className="ZoomPercent">{(this.state.scale * 100).toFixed(1)}%</div>
        </div>);
    }
}

Toolbar.propTypes = {
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func,
}

export default Toolbar;