import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import axios from "axios";

// function Map() {
//   return (
//   <GoogleMap 
//     defaultZoom={10} 
//     defaultCenter={{ lat: 42.3601, lng: -71.0589}} 
//   />
//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// function App() {
//   return (
//     <div className="App">
//       <header>
//         Boston COVID19 Tracker
//       </header>

//       <div>
//         Map
//       </div>
//       <div style={{width:'100vw', height:'100vh'}}>
//         <WrappedMap 
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
//           process.env.REACT_APP_GOOGLE_KEY
//         }`}
//         loadingElement = {<div style={{height:'100%'}} />}
//         containerElement = {<div style={{height:'100%'}} />}
//         mapElement = {<div style={{height:'100%'}} />}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import Sidebar from "react-sidebar";
 
const mql = window.matchMedia(`(min-width: 800px)`);

function Map() {
    return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 42.3601, lng: -71.0589}} 
    />
    );
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(Map));
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    console.log(axios.get("http://localhost:8000/api/trackers/")); //test django
    return (
      <Sidebar
        sidebar={
          <div className="SidebarPad">
            <h3>your neighborhood</h3>
          </div>
        }
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <header style={{textAlign: 'center'}}>
          <h1>Boston COVID19 Tracker</h1>
        </header>

       <div style={{textAlign: 'center'}}>
         <h2>Map</h2>
       </div>
       <div style={{width:'100vw', height:'100vh'}}>
         <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement = {<div style={{height:'100%'}} />}
        containerElement = {<div style={{height:'100%'}} />}
        mapElement = {<div style={{height:'100%'}} />}
        />
      </div>
      </Sidebar>
    );
  }
}
 
export default App;
