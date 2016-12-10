import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
           <Navbar/>
           {this.props.children}
         </div>
      );
   }
}

export default App;
