import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
  constructor() {
    super()
    this.state = {
      radioClick: "name",
    };
    this.onChange = this.onChange.bind(this);
  }


  onChange(e) {
    // on radio state change handler
    const value = e.target.value;
    console.log(value)
    this.setState({
      radioClick: e.target.value
    })
    this.props.sortBy(value)
  }

  render() {
    return (
      <div className='radioButtons'>
        <div className='left'>
          <input type='radio' value="name" checked={this.state.radioClick === "name"} onChange={this.onChange} />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input type='radio' value="age" checked={this.state.radioClick === "age"} onChange={this.onChange} />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );

  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
}

export default Radio;
