import './App.css';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
