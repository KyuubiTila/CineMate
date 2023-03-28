import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="dark:bg-slate-800">
      <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
