
import './App.css';
import Navbar from './components/header/Navbar.jsx';
import Home from './components/home/Home';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import TemplateProvider from './components/template/TemplateProvider';
import ContextProvider from './components/context/contextProvider';
import DetailView from './components/itemDeatils/DetailView';




function App() {
  return (
    <TemplateProvider>
      <ContextProvider >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/cart' component={Cart}/> 
          <Route exact path='/product/:id' component={DetailView}/> 
        </Switch>
      </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>

  );
}

export default App;
