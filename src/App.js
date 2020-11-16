import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const count = 4;


const message = "This is a constant"
export default class App extends Component {


  constructor(props)
  {
    super(props);
    this.state = {
      count:5
    }
  }
  isEven()
  {
    return this.state.count % 2 === 0?'Event':'Odd';
  }

  getClassName(val) {
    return val % 2 === 0?
      "bg-primary text-white text-center p-2 m-1":
      "bg-secondary text-white text-center p-2 m-1"
  }

  handleClick = ()=>
    this.setState({count: this.state.count + 1});

  render = ()=>
    // <h4 className={this.getClassName(this.state.count)} >
    //   <button className="btn btn-info m-2" onClick={this.handleClick}>
    //     Click Me
    //   </button>
    //     {message} is {this.isEven()}
    // </h4>


    <div className="container-fluid p-4">
      <div className="row bg-info text-white p-2">
        <div className="col font-weight-bold">Value</div>

        <div className="col-6 font-weight-bold">Even?</div>

      </div>


      <div className="row bg-light p-2 border"> 
            <div className="col">{this.state.count}</div>
            <div className="col-6">{this.isEven(this.state.count)}</div>
      </div>
      <div className="row">
        <div className="col">
          <button className='btn btn-info m-5' onClick={this.handleClick}>
            Click Me
          </button>
        </div>
      </div>

    </div>
}