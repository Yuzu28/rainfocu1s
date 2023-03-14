import './App.css';
import './styles/App.scss';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Attendee from './components/Attendee';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <div className="content">
          <Header></Header>
          <Attendee></Attendee>
        </div>
    </div>
  );
}

export default App;
