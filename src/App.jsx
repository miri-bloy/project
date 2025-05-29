import './App.css';
import AppRoutes from './components/common/AppRoutes';
import Navbar from './components/common/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
