import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
// import './index.css';
import GlobalStyle from './styles/reset';
import { hot } from "react-hot-loader";


const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Route component={LandingPage} path="/" exact/>
        <Route component={LoginPage} path="/login" exact/>
      </BrowserRouter>
    </>
  );
}

export default hot(module)(App);
