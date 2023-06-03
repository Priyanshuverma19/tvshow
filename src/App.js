
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';



function App() {
  return (
    <Router>
    
   <Routes>
   <Route exact path="/" element={ <ShowList/>} />
    <Route path="/summary/:showId" element={<ShowSummary/>}/>
   </Routes>
    </Router>


  );
}

export default App;
