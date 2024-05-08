import Topbar from './scenes/global/topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';


function App() {
  return (
    <div className="app">
      <Dashboard/>
      <Topbar/>
      <Sidebar/>
      
    </div>
    
  );
}

export default App;
