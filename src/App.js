import './App.css';
import Panels from './components/Panels/Panels';
import InteractiveGraph from './components/InteractiveGraph/InteractiveGraph';
import Introduction from './components/Introduction/Introduction';
import SecondParagraph from './components/SecondParagraph/SecondParagraph';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <InteractiveGraph/>
      <Weather/>
      <Panels/>
      <Introduction/>
      <SecondParagraph/>
      <footer >Developed by Manoj Karthikeya</footer>
    </div>
  );
}

export default App;
