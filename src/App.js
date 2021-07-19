import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDetails from './component/ProductDetails';
import Header from './component/Header'
import Home from './component/Home';
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/product/:productId' component={ProductDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
