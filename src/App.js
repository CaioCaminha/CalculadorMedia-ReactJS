import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {ReactComponent as GithubSvg} from "./svgs/githubSvg.svg"
import {ReactComponent as CopyrightSvg} from "./svgs/copyrightSvg.svg"
import {ReactComponent as LinkedinSvg} from "./svgs/linkedinSvg.svg"
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
      <footer>
        <CopyrightSvg className="footer-copyright"/>
        <a href="https://github.com/CaioCaminha"><GithubSvg className="footer-github"/></a>
        <a href="https://www.linkedin.com/in/caio-caminha-53b2a6205/"><LinkedinSvg className="footer-linkedin"/></a>
        <p>By Caio Freitas Caminha</p>
      </footer>
    </div>
  );
}

export default App;
