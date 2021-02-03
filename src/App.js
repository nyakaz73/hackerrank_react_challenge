import React, { Component } from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
    super()
    this.state = {
      parameterState: ""
    }
  }



  sortByParameter = (parameter) => {
    console.log('Here');
    console.log(parameter);
    this.setState({
      parameterState: parameter
    })
  }



  render() {
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        {/*How to share functionality or opertations between two child components?????? */}
        <Radio sortBy={this.sortByParameter} />
        <Table sortParameter={this.state.parameterState} />
      </div>
    );


  }
}

export default App;
