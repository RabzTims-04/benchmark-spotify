import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Album from './components/Album'
import Artist from './components/Artist';
import Audio from './components/Audio'

function App() {
  return (
    <div>

      <Router>
   {/*    <Audio/> */}

      <Route path="/" exact render={(routerProps)=><Home {...routerProps} /> }/>

      <Route path="/artist/:artistName" component={Artist}/>

      <Route path="/album/:albumID" component={Album}/>

      </Router>
     
    </div>
  );
}

export default App;
