import React, { Component } from 'react';
import './App.css';

const electron = window.require('electron');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }
  onOpen() {

    let photos =electron.remote.dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory', 'multiSelections']
    });

    this.setState({
      photos:photos
    });

  }
  render() {
    return (
      <div className="App">
        <h1>My super image viewer</h1>
        <button onClick={this.onOpen.bind(this)} >Open files</button>
        {this.state.photos.map((p) => {
          return (<img width="100px" src={p} alt={p}/>);
          // return (<p>{p}</p>)
        })}
      </div>
    );
  }
}

export default App;
