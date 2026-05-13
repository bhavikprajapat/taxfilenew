import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

function App() {
  return (
   <div>
 {/* <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes> */}
      <Home/>
   </div>
  );
}

export default App;
