import React from 'react';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

class App extends React.Component
{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {drawer: true}
  }

  toggle() {
    this.setState({drawer: !this.state.drawer});
  }

  render() {
    return (
      <div>
        <Map />
        {/* <Topbar /> */}
        <Sidebar />
      </div>
    );
  } 
}

export default App;
