import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './components/Header';
import Footer from './components/Footer';
import JsonData from './data/data.json';


function App() {
  return (
    <div className="App">
      <Header data={JsonData.Header} />
      <Main />
      <Footer data={JsonData.Footer}/>
    </div>
  );
}

export default App;
