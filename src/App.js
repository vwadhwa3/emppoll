import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import Header from './components/Header';
import Questions from './components/Questions';
function App() {
  console.log("App.js")
  return (
    <div className="App">
        {/* <Login/> */}
        <Header/>
        <Questions/>
    </div>
  );
}

export default App;
