import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CalculatorComponent from './components/calculatorComponent/CalculatorComponent';
import SucessoComponent from './components/SucessoComponent/SucessoComponent';
import ReprovadoComponent from './components/ReprovadoComponent/ReprovadoComponent';

function App() {
  return (
    <div className="div">
      <header className="header-app">
        <h1>Bem-Vindo ao calculador de média</h1>
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <CalculatorComponent/>
          </Route>
          <Route exact path="/aprovado">
            <SucessoComponent/>
          </Route>
          <Route path="/reprovado">
            <ReprovadoComponent/>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
