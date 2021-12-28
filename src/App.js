import './App.css';
import Header from './container/Header';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import ProductList from './container/ProductList';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
    <Header></Header>
    <Switch>
    <Route exact path='/' component={ProductList}/>
    <Route exact path='/product/:productId' component={ProductDetails}/>
    <Route> 404 not found</Route>
    </Switch>
    </Router>
   
    </div>
  );
}

export default App;
