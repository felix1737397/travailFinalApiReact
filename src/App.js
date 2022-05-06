import './App.css';
import ListeLivres from './components/ListeLivres';
// Les components
import Header from './components/Header'


function App() {

  return (
    <div className="App">

      <Header/>
      
      <ListeLivres/>
      <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
    </nav>
      </div>
      
  );
}

export default App;
