import './styles.css'

import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceReady: false
    }

    this.handlers = {
      onDeviceReady: this.onDeviceReady.bind(this)
    }

    document.addEventListener('deviceready', this.handlers.onDeviceReady, false);

  }

  onDeviceReady() {
    document.removeEventListener('deviceready', this.handlers.onDeviceReady);

    this.setState({
      deviceReady: true
    });
  }

  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./react.svg')}/>
        <p>Edit <code>src/components/App.js</code> and save to hot reload your changes.</p>
      </div>
      { this.state.deviceReady && (<p>Device Ready</p>)}
      { !this.state.deviceReady && (<p>Device IS NOT Ready</p>)}
    </div>
  }
}

export default App
